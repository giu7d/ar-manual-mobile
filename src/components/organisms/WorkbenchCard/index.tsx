import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import * as Card from "../../atoms/Card";
import { IconButton } from "../../atoms/IconButton";
import { Button } from "../../molecules/Button";
import { WorkbenchImage } from "./styles";

export interface IWorkbenchCardProps {
  componentSeries: string;
  workbenchSeries: string;
  handleAnalysis?: VoidFunction;
}

export const WorkbenchCard: React.FC<IWorkbenchCardProps> = ({
  componentSeries,
  workbenchSeries,
  handleAnalysis = () => {},
}) => {
  return (
    <Card.Card
      style={{
        shadowColor: "#333",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Card.Content>
        <Card.Image>
          <WorkbenchImage
            source={{
              uri: "https://via.placeholder.com/250x250",
            }}
          />
        </Card.Image>
        <Card.GroupWrapper>
          <Card.ItemWrapper>
            <Card.Title>Galga de Controlo</Card.Title>
            <Card.Description>{workbenchSeries}</Card.Description>
          </Card.ItemWrapper>
          <Card.ItemWrapper>
            <Card.Title>Componente</Card.Title>
            <Card.Description>{componentSeries}</Card.Description>
          </Card.ItemWrapper>
        </Card.GroupWrapper>
      </Card.Content>
      <Card.ActionsWrapper>
        <Button
          touchableProps={{ style: { minWidth: "80%", minHeight: 64 } }}
          onPress={handleAnalysis}
        >
          Iniciar Teste
        </Button>
        <IconButton
          style={{
            width: 64,
            height: 64,
            marginLeft: 14,
          }}
        >
          <Icon name="more-vertical" size={24} />
        </IconButton>
      </Card.ActionsWrapper>
    </Card.Card>
  );
};
