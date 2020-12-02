import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { validate } from "./validation";
import { Warning } from "../../fragments/Warning";
import { FormInput } from "../../fragments/FormInput";
import { ImageHorizontalThumbnails } from "../../fragments/ImageHorizontalThumbnails";
import { useTestBench } from "../../../hooks/useTestbench";
import { useStores } from "../../../hooks/useStores";
import { Analysis } from "../../../models/Analysis";
import { FinishButton } from "../../fragments/FinishButton";
import { TakePhotoButton } from "../../fragments/TakePhotoButton";
import { FailureDropdown } from "../../fragments/FailureDropdown";

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
    const { testBench } = useTestBench(testBenchId);
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState<string>();
    const { analysisStore, failureStore } = useStores();
    const navigation = useNavigation();

    useEffect(() => {
      handleValidation();
    }, [form, failureStore.photos]);

    const toNextInstruction = (nextInstructionId?: string) => {
      analysisStore.setSelectedInstruction(
        testBench.instructions.find(({ id }) => id === nextInstructionId) ||
          null
      );
    };

    const handleValidation = async () => {
      const validationError = await validate({
        caoId: form.cao.id,
        description: form.description,
        photos: failureStore.photos,
      });
      setError(validationError ? validationError[0] : undefined);
    };

    const handleFinish = async () => {
      await handleValidation();
      if (!error && analysisStore.selectedInstruction) {
        const analysis = new Analysis({
          id: uuid.v4(),
          instructionId: analysisStore.selectedInstruction.id,
          status: "failure",
          startedAt: analysisStore.selectedInstructionAt,
          finishedAt: new Date(),
          failure: {
            id: uuid.v4(),
            caoItemId: form.cao.id,
            description: form.description,
            photos: failureStore.photos,
            createdAt: new Date(),
          },
        });

        analysisStore.addAnalysis(analysis);
        toNextInstruction(analysisStore.selectedInstruction.nextInstructionId);
        navigation.goBack();
        failureStore.clear();
      }
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
        <ImageHorizontalThumbnails
          photos={failureStore.photos}
          onClick={(i) => failureStore.removePhoto(i)}
        />
        <TakePhotoButton>Abrir Camera</TakePhotoButton>
        <FinishButton error={error} onClick={handleFinish}>
          Reportar Falha
        </FinishButton>
      </>
    );
  }
);
