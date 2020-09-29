import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Instruction } from "../../models/Instruction";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import {
  Title,
  Wrapper,
  Subtitle,
  FormWrapper,
  ThumbnailWrapper,
} from "./styles";
import { HeaderAppBar } from "../../components/organisms/HeaderAppBar";
import { FormInput } from "../../components/molecules/FormInput";
import { Button } from "../../components/molecules/Button";
import { ScrollView } from "react-native-gesture-handler";
import { ITheme } from "../../theme";
import { useTheme } from "styled-components";
import { useStores } from "../../hooks/useStores";
import { AnalysisFailure } from "../../models/Analysis";
import { Thumbnail } from "../../components/molecules/Thumbnail";

export interface IReportFailureProps {}

export const ReportFailure: React.FC<IReportFailureProps> = observer(
  (props) => {
    const [failure, setFailure] = useState({
      id: "",
      createdAt: new Date(),
      description: "",
      src: "",
    } as AnalysisFailure);
    const { analysisStore, failureStore } = useStores();
    const navigation = useNavigation();
    const route = useRoute() as { params: { instruction: Instruction } };
    const theme = useTheme() as ITheme;

    useEffect(() => {
      console.log("> Reported Instruction ID", route.params.instruction.id);
    }, []);

    const handleFinish = () => {
      analysisStore.setAnalysis(route.params.instruction, "fail", failure);
      failureStore.clear();
      handleGoBack();
    };

    const handleGoBack = () => {
      navigation.goBack();
    };

    const handleCamera = () => {
      navigation.navigate("ReportFailureCamera");
    };

    return (
      <>
        <HeaderAppBar initial="G" handleGoBack={handleGoBack} />
        <GlobalWrapper>
          <Wrapper>
            <ScrollView>
              <FormWrapper>
                <Title>Reportar Falha</Title>
                <Subtitle>
                  Preencha os campos a baixo para reportar a falha.
                </Subtitle>
                <FormInput
                  label="Tipo da falha"
                  inputProps={{
                    value: failure.src,
                    onChange: ({ nativeEvent }) =>
                      setFailure((state) => ({
                        ...state,
                        src: nativeEvent.text,
                      })),
                  }}
                  required
                />
                <FormInput
                  label="Descrição da falha"
                  inputProps={{
                    multiline: true,
                    numberOfLines: 3,
                    value: failure.description,
                    onChange: ({ nativeEvent }) =>
                      setFailure((state) => ({
                        ...state,
                        description: nativeEvent.text,
                      })),
                  }}
                  required
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
                      backgroundColor: theme.colors.danger,
                    },
                  }}
                >
                  Reportar Falha
                </Button>
              </FormWrapper>
            </ScrollView>
          </Wrapper>
        </GlobalWrapper>
      </>
    );
  }
);
