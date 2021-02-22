import React, { useCallback, useLayoutEffect, useState } from "react";
import * as Yup from "yup";
import { useTestBench } from "../../hooks/useTestbench";
import { FormInput } from "../fragments/FormInput";
import { FormDropdown } from "../fragments/FormDropdown";
import { ImageHorizontalThumbnails } from "../fragments/ImageHorizontalThumbnails";
import { TakePhotoButton } from "../fragments/TakePhotoButton";
import { usePhotos } from "../../hooks/usePhotos";
import { ActivityIndicator } from "react-native";
import { observer } from "mobx-react";
import { FinishButton } from "../fragments/FinishButton";
import { useInstructions } from "../../hooks/useInstructions";
import uuid from "react-native-uuid";
import { Analysis } from "../../models/Analysis";
import { useAnalysis } from "../../hooks/useAnalysis";
import { useNavigation } from "@react-navigation/native";
import { Warning } from "../fragments/Warning";
import { Label, LabelRequired } from "../fragments/Label";

const FailureSchema = Yup.object().shape({
  type: Yup.string().required(),
  description: Yup.string().max(555),
  photos: Yup.array(Yup.string().required()).min(1).required(),
});

export const AnalysisFailureForm: React.FC<{ testBenchId: string }> = observer(
  ({ testBenchId }) => {
    const navigation = useNavigation();

    const { addAnalysis } = useAnalysis();
    const { testBench } = useTestBench(testBenchId);
    const { photos, isLoading, isError, ...PhotoUtils } = usePhotos();
    const {
      selectedInstruction,
      selectedInstructionAt,
      ...InstructionUtils
    } = useInstructions(testBenchId);

    const [error, setError] = useState<string>();
    const [form, setForm] = useState({
      type: "",
      description: "",
    });

    const handleInput = useCallback((key: string, value: string) => {
      setForm((state) => ({
        ...state,
        [key]: value,
      }));
    }, []);

    const handleSubmit = async () => {
      setError(undefined);
      try {
        if (!selectedInstruction) throw new Error("No selected instruction!");

        const failurePhotos = await PhotoUtils.uploadPhotos();

        if (!failurePhotos) throw new Error("No photo uploaded!");

        await FailureSchema.validate({ ...form, photos: failurePhotos });

        const analysis = new Analysis({
          id: uuid.v4(),
          instructionId: selectedInstruction.id,
          status: "failure",
          startedAt: selectedInstructionAt,
          finishedAt: new Date(),
          failure: {
            id: uuid.v4(),
            caoItemId: form.type,
            description: form.description,
            photos: failurePhotos,
            createdAt: new Date(),
          },
        });

        addAnalysis(analysis);

        InstructionUtils.goToInstruction(selectedInstruction.nextInstructionId);

        PhotoUtils.clearPhotos();

        navigation.goBack();
      } catch (err) {
        setError(err.message);
      }
    };

    useLayoutEffect(() => {
      PhotoUtils.clearPhotos();
    }, []);

    if (isLoading) {
      return (
        <>
          <ActivityIndicator size="large" />
        </>
      );
    }

    return (
      <>
        {error && <Warning title="Atenção!" description={error} />}
        <FormDropdown
          placeholder="Selecione a falha encontrada"
          searchablePlaceholder="Digite para buscar"
          label="Tipo da falha"
          defaultValue=""
          items={testBench.cao.items}
          onChange={({ id }) => handleInput("type", id)}
          required
        />
        <FormInput
          label="Descrição da falha (opcional)"
          inputProps={{
            multiline: true,
            numberOfLines: 3,
            value: form.description,
            onChange: ({ nativeEvent }) =>
              handleInput("description", nativeEvent.text),
          }}
        />
        <>
          <Label
            style={{
              alignSelf: "flex-start",
            }}
          >
            Foto da falha
            <LabelRequired>*</LabelRequired>
          </Label>
          <ImageHorizontalThumbnails
            photos={photos}
            onClick={PhotoUtils.removePhoto}
          />
          <TakePhotoButton>Abrir Camera</TakePhotoButton>
        </>
        <FinishButton error={isLoading} onClick={handleSubmit}>
          Reportar Falha
        </FinishButton>
      </>
    );
  }
);
