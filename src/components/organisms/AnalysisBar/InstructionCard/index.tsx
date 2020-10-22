import React from "react";
import { View } from "react-native";
import HTML from "react-native-render-html";
import { useTheme } from "styled-components";
import { Feather as Icon } from "@expo/vector-icons";

import { Warning, IWarningProps } from "../../../molecules/Warning";
import { ITheme } from "../../../../theme";

import { Actions } from "./Actions";
import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  ActionsWrapper,
} from "./styles";

interface IProps {
  title: string;
  description: string;
  warning?: Array<IWarningProps>;
  selected?: boolean;
  setSelected?: (state: boolean) => void;
  status?: "pending" | "success" | "fail";
  onAnalysisDone?: (status: "pending" | "success" | "fail") => void;
}

export const InstructionCard: React.FC<IProps> = ({
  title,
  description,
  warning = [],
  selected = false,
  setSelected = () => {},
  status = "pending",
  onAnalysisDone = () => {},
}) => {
  const theme = useTheme() as ITheme;

  const handleAnalysis = (newStatus: "pending" | "success" | "fail") => {
    onAnalysisDone(newStatus);
  };

  return (
    <Wrapper onPress={() => setSelected(true)}>
      <ContentWrapper>
        <View>
          <Title>{title}</Title>
          <Description isHidden={!selected}>
            <HTML html={description} baseFontStyle={{ fontSize: 18 }} />
          </Description>
        </View>
        <View>
          {status === "fail" && (
            <Icon name="alert-triangle" color={theme.colors.danger} size={24} />
          )}
          {status === "success" && (
            <Icon name="check" color={theme.colors.primary} size={24} />
          )}
        </View>
      </ContentWrapper>
      {selected &&
        warning &&
        warning.map((value, index) => (
          <Warning
            key={index}
            {...value}
            wrapperProps={{ style: { minWidth: "80%" } }}
          />
        ))}
      {selected && (
        <ActionsWrapper>
          <Actions status={status} handleStatusChange={handleAnalysis} />
        </ActionsWrapper>
      )}
    </Wrapper>
  );
};
