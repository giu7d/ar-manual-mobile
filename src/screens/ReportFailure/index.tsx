import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Instruction } from "../../models/Instruction";
import { FormInput } from "../../components/molecules/FormInput";
import { Button } from "../../components/molecules/Button";
import { useStores } from "../../hooks/useStores";
import { Thumbnail } from "../../components/molecules/Thumbnail";
import { DropdownInput } from "../../components/molecules/DropdownInput";
import { CAOItem } from "../../models/CAOItem";
import { validate } from "./ReportFailureFormValidation";
import { Warning } from "../../components/molecules/Warning";
import { ModalTemplate } from "../../components/templates/ModalTemplate";
import { ThumbnailWrapper } from "../../components/templates/ModalTemplate/styles";

export interface IReportFailureProps {
  defaultCAO?: CAOItem;
}

export const ReportFailure: React.FC<IReportFailureProps> = observer(
  ({ defaultCAO = { description: "" } }) => {
    const { analysisStore, failureStore } = useStores();
    const navigation = useNavigation();
    const route = useRoute() as { params: { instruction: Instruction } };
    const theme = useTheme();

    const [error, setError] = useState<string>();
    const [form, setForm] = useState({
      cao: { description: "", id: "" },
      description: "",
    });

    useEffect(() => {
      handleValidation();
    }, [form, failureStore.failure.photos]);

    const handleValidation = async () => {
      const validationError = await validate({
        caoId: form.cao.description,
        description: form.description,
        photos: failureStore.failure.photos,
      });

      if (validationError) {
        setError(validationError[0]);
        return false;
      }

      setError(undefined);
      return true;
    };

    const handleFinish = async () => {
      if (await handleValidation()) {
        const { instruction } = route.params;

        await failureStore.uploadFiles();

        analysisStore.setAnalysis(instruction, "failure", {
          id: new Date().toISOString(),
          caoItemId: form.cao.id,
          description: form.description,
          src: failureStore.failure.uploadedPhotosURLs,
          createdAt: new Date(),
        });
        failureStore.clear();
        analysisStore.selectInstruction(instruction.nextStep);
        navigation.goBack();
      }
    };

    const handleCamera = () => {
      navigation.navigate("FailureCamera");
    };

    return (
      <ModalTemplate>
        {error && <Warning title="Atenção!" description={error} />}
        {analysisStore.cao && (
          <DropdownInput
            placeholder="Selecione a falha encontrada"
            searchablePlaceholder="Digite para buscar"
            label="Tipo da falha"
            required
            items={analysisStore.cao?.items}
            defaultValue={defaultCAO.description}
            onChange={(item) =>
              setForm((state) => ({
                ...state,
                cao: item,
              }))
            }
          />
        )}
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
        <ThumbnailWrapper>
          {failureStore.failure.photos.map(({ uri }, i) => (
            <Thumbnail
              key={i}
              uri={uri}
              onPress={() => failureStore.removePhoto(i)}
            />
          ))}
        </ThumbnailWrapper>
        <Button
          onPress={handleCamera}
          touchableProps={{
            style: {
              backgroundColor: theme.colors.foreground,
              minHeight: 64,
            },
          }}
          textProps={{
            style: {
              color: theme.colors.primary,
            },
          }}
        >
          Adicionar Foto
        </Button>
        <Button
          onPress={handleFinish}
          touchableProps={{
            style: {
              minHeight: 64,
              backgroundColor: !error
                ? theme.colors.danger
                : theme.colors.background,
            },
          }}
        >
          Reportar Falha
        </Button>
      </ModalTemplate>
    );
  }
);
