import React from "react";

import * as Card from "../Card";
import { Button } from "../Button";
import { WorkbenchImage } from "./styles";

export interface IWorkbenchCardProps {
  componentSeries: string;
  workbenchSeries: string;
  thumbnailSrc: string;
  handleAnalysis?: VoidFunction;
}

export const WorkbenchCard: React.FC<IWorkbenchCardProps> = ({
  componentSeries,
  workbenchSeries,
  thumbnailSrc,
  handleAnalysis = () => {},
}) => {
  return (
    <Card.Card
      style={{
        elevation: 2,
      }}
    >
      <Card.Content>
        <Card.Image>
          <WorkbenchImage
            source={{
              uri: thumbnailSrc,
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
      <Card.ActionsWrapper
        style={{
          backgroundColor: "#FFF",
          borderColor: "#F5F5F5",
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <Button
          touchableProps={{ style: { minWidth: "95%" } }}
          onPress={handleAnalysis}
        >
          Iniciar Teste
        </Button>
      </Card.ActionsWrapper>
    </Card.Card>
  );
};
