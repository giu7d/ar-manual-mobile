import React from "react";
import { Button } from "react-native";
import { Wrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";

export interface Props {}

export const Home: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Wrapper>
        <Button title="Home" onPress={() => navigation.navigate("Analysis")} />
      </Wrapper>
    </Wrapper>
  );
};
