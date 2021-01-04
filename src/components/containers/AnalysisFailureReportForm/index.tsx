import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { validate } from "./validation";
import { Warning } from "../../fragments/Warning";
import { FormInput } from "../../fragments/FormInput";
import { ImageHorizontalThumbnails } from "../../fragments/ImageHorizontalThumbnails";
import { useTestBench } from "../../../hooks/useTestbench";
import { Analysis } from "../../../models/Analysis";
import { FinishButton } from "../../fragments/FinishButton";
import { TakePhotoButton } from "../../fragments/TakePhotoButton";
import { FailureDropdown } from "../../fragments/FailureDropdown";
import { useAnalysis } from "../../../hooks/useAnalysis";
import { useInstructions } from "../../../hooks/useInstructions";
import { usePhotos } from "../../../hooks/usePhotos";

interface IForm {
  cao: { description: string; id: string };
  description: string;
}

const initialForm: IForm = {
  cao: { description: "", id: "" },
  description: "",
};

interface IProps {
  testBenchId: string;
}

export const AnalysisFailureReportForm: React.FC<IProps> = observer(
  ({ testBenchId }) => {
    const navigation = useNavigation();

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState<string>();

    const { addAnalysis } = useAnalysis();
    const { testBench } = useTestBench(testBenchId);
    const {
      photos,
      isLoading,
      removePhoto,
      uploadPhotos,
      clearPhotos,
    } = usePhotos();
    const {
      selectedInstruction,
      selectedInstructionAt,
      goToInstruction,
    } = useInstructions(testBenchId);

    useEffect(() => {
      handleValidation();
    }, [form, photos]);

    const handleValidation = async () => {
      const validationError = await validate({
        caoId: form.cao.id,
        description: form.description,
        photos,
      });
      setError(validationError ? validationError[0] : undefined);
    };

    const handleFinish = async () => {
      await handleValidation();

      if (error || !selectedInstruction) return;

      const failurePhotos = await uploadPhotos();

      if (!failurePhotos) return;

      const analysis = new Analysis({
        id: uuid.v4(),
        instructionId: selectedInstruction.id,
        status: "failure",
        startedAt: selectedInstructionAt,
        finishedAt: new Date(),
        failure: {
          id: uuid.v4(),
          caoItemId: form.cao.id,
          description: form.description,
          photos: failurePhotos,
          createdAt: new Date(),
        },
      });

      addAnalysis(analysis);

      goToInstruction(selectedInstruction.nextInstructionId);

      clearPhotos();

      navigation.goBack();
    };

    return (
      <>
        {error && <Warning title="Atenção!" description={error} />}
        <FailureDropdown
          items={testBench.cao.items}
          onChange={(item) =>
            setForm((state) => ({
              ...state,
              cao: item,
            }))
          }
        />
        <FormInput
          label="Descrição da falha"
          inputProps={{
            multiline: true,
            numberOfLines: 3,
            value: form.description,
            onChange: ({ nativeEvent }) =>
              setForm((state) => ({
                ...state,
                description: nativeEvent.text,
              })),
          }}
        />
        <ImageHorizontalThumbnails photos={photos} onClick={removePhoto} />
        <TakePhotoButton>Abrir Camera</TakePhotoButton>
        <FinishButton
          error={error !== undefined || isLoading}
          onClick={handleFinish}
        >
          Reportar Falha
        </FinishButton>
      </>
    );
  }
);
