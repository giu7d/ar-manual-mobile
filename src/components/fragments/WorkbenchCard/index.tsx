import React from "react";

import * as Card from "../Card";
import { Button } from "../Button";
import { WorkbenchImage } from "./styles";
import { useTheme } from "styled-components";
import { rgba } from "polished";

export interface IWorkbenchCardProps {
  componentSeries: string;
  workbenchSeries: string;
  thumbnailSrc: string;
  handleAnalysis?: (type: "visual" | "complete") => void;
}

export const WorkbenchCard: React.FC<IWorkbenchCardProps> = ({
  componentSeries,
  workbenchSeries,
  thumbnailSrc,
  handleAnalysis = (type: "visual" | "complete") => {},
}) => {
  const theme = useTheme();

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
          touchableProps={{
            style: {
              flex: 1,
              minHeight: 64,
              backgroundColor: rgba(theme.colors.primary, 0.75),
              marginTop: 8,
              marginBottom: 4,
            },
          }}
          onPress={() => handleAnalysis("visual")}
        >
          Inspeção Visual
        </Button>
        <Button
          touchableProps={{
            style: { flex: 1, minHeight: 64, marginTop: 4, marginBottom: 8 },
          }}
          onPress={() => handleAnalysis("complete")}
        >
          Inspeção Completa
        </Button>
      </Card.ActionsWrapper>
    </Card.Card>
  );
};
