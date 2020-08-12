import React from "react";
import { useNavigation } from "@react-navigation/native";

import { InformationCard } from "../../components/InformationCard";
import { AnalysisCanvas } from "../../components/AnalysisCanvas";
import { AnalysisInstruction } from "../../components/AnalysisInstruction";

import { Wrapper } from "./styles";
import { GlobalStyle as GlobalWrapper } from "../../styles";

export interface IAnalysisProps {}

export const Analysis: React.FC<IAnalysisProps> = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <GlobalWrapper>
      <Wrapper>
        <AnalysisCanvas handleGoBack={handleGoBack}>
          <InformationCard
            information={[
              { key: "Galga de controlo", value: "C24105974" },
              { key: "Componente", value: "1697143X" },
            ]}
          />
        </AnalysisCanvas>
        <AnalysisInstruction handleLogout={handleLogout} />
      </Wrapper>
    </GlobalWrapper>
  );
};
