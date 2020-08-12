import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Button, ButtonText } from "../Button";
import { IconButton } from "../IconButton";
import { ITheme } from "../../theme";

import { Wrapper, Content, WarnContent, Title, Value, Actions } from "./styles";

export interface IInstructionProps {
  selected?: boolean;
}

export const InstructionCard: React.FC<IInstructionProps> = ({
  selected = false,
}) => {
  const theme = useTheme() as ITheme;

  return (
    <Wrapper selected={selected}>
      <Content>
        <Title>Instruções</Title>
        <Value>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          ratione commodi odit, et sapiente dolor eligendi hic iusto debitis sed
          in deserunt velit! Quibusdam corporis reiciendis consectetur quis fuga
          harum!
        </Value>
      </Content>
      {selected && (
        <WarnContent>
          <Title>Alerta</Title>
          <Value>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            ratione commodi odit!
          </Value>
        </WarnContent>
      )}
      <Actions>
        <Button
          style={{
            width: "75%",
            backgroundColor: theme.colors.foreground,
          }}
        >
          <ButtonText
            style={{
              color: theme.colors.primary,
            }}
          >
            Aprovar
          </ButtonText>
        </Button>
        <IconButton style={{ backgroundColor: theme.colors.foreground }}>
          <Icon name="alert-triangle" size={24} color={theme.colors.danger} />
        </IconButton>
      </Actions>
    </Wrapper>
  );
};
