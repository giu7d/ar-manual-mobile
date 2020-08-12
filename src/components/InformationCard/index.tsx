import React from "react";
import { useTheme } from "styled-components";
import { Feather as Icon } from "@expo/vector-icons";

import { ITheme } from "../../theme";
import { Wrapper, Content, Group, Title, Value } from "./styles";

interface IInformationCardProps {
  information: Array<{
    key: string;
    value: string;
  }>;
}

const InformationCard: React.FC<IInformationCardProps> = ({ information }) => {
  const theme = useTheme() as ITheme;

  return (
    <Wrapper>
      <Icon name="alert-circle" size={24} color={theme.colors.foreground} />
      <Content>
        {information.map(({ key, value }, index) => (
          <Group key={index}>
            <Title>{key}</Title>
            <Value>{value}</Value>
          </Group>
        ))}
      </Content>
    </Wrapper>
  );
};

export { InformationCard };
