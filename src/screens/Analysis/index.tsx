import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AnalysisInformation } from "../../components/molecules/AnalysisInformation";
import { AnalysisCanvas } from "../../components/molecules/AnalysisCanvas";
import { AnalysisBar } from "../../components/organisms/AnalysisBar";
import { AnalysisInstructionCard } from "../../components/organisms/AnalysisInstructionCard";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { Wrapper } from "./styles";

export interface IAnalysisProps {}

export const Analysis: React.FC<IAnalysisProps> = (props) => {
  const navigation = useNavigation();
  const route = useRoute() as { params: { id: string } };

  useEffect(() => {
    console.log(route.params.id);
  }, []);

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
          <AnalysisInformation
            items={[
              { key: "Galga de controlo", value: "C24105974" },
              { key: "Componente", value: "1697143X" },
            ]}
          />
        </AnalysisCanvas>
        <AnalysisBar handleLogout={handleLogout}>
          <AnalysisInstructionCard
            title="hello world"
            description="nicee"
            warning={[{ title: "warning", description: "hello world" }]}
            initialSelected
          />
          <AnalysisInstructionCard title="hello world" description="nicee" />
          <AnalysisInstructionCard title="hello world" description="nicee" />
          <AnalysisInstructionCard title="hello world" description="nicee" />
        </AnalysisBar>
      </Wrapper>
    </GlobalWrapper>
  );
};
