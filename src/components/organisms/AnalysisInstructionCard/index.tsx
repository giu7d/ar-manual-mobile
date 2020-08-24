import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { ITheme } from "../../../theme";
import { IconButton } from "../../atoms/IconButton";
import { Button } from "../../molecules/Button";
import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  WarnWrapper,
  ActionsWrapper,
} from "./styles";

export interface IAnalysisInstructionCardProps {
  title: string;
  description: string;
  warning?: Array<{ title: string; description: string }>;
  selected?: boolean;
  status?: "pending" | "success" | "fail";
}

export const AnalysisInstructionCard: React.FC<IAnalysisInstructionCardProps> = ({
  title,
  description,
  warning = [],
  selected = false,
  status = "pending",
}) => {
  const theme = useTheme() as ITheme;

  const renderAction = () => {
    if (status === "pending") {
      return (
        <>
          <Button
            touchableProps={{
              style: {
                minWidth: "70%",
                backgroundColor: theme.colors.foreground,
              },
            }}
            textProps={{
              style: {
                color: theme.colors.primary,
              },
            }}
          >
            Aprovar
          </Button>

          <IconButton style={{ backgroundColor: theme.colors.foreground }}>
            <Icon name="alert-triangle" size={24} color={theme.colors.danger} />
          </IconButton>
        </>
      );
    }
    if (status === "success") {
      return (
        <>
          <Button
            touchableProps={{
              style: {
                alignSelf: "center",
                minWidth: "90%",
                backgroundColor: theme.colors.primary,
              },
            }}
            textProps={{
              style: {
                color: theme.colors.foreground,
              },
            }}
          >
            Aprovado
          </Button>
        </>
      );
    }
    if (status === "fail") {
      return (
        <>
          <Button
            touchableProps={{
              style: {
                alignSelf: "center",
                minWidth: "90%",
                backgroundColor: theme.colors.danger,
              },
            }}
            textProps={{
              style: {
                color: theme.colors.foreground,
              },
            }}
          >
            Reprovado
          </Button>
        </>
      );
    }
  };

  return (
    <Wrapper selected={selected}>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      {selected &&
        warning &&
        warning.map(({ title, description }, index) => (
          <WarnWrapper key={index}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </WarnWrapper>
        ))}
      <ActionsWrapper>{renderAction()}</ActionsWrapper>
    </Wrapper>
  );
};
