import React from "react";
import { Button } from "react-native";
import { Wrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";

export interface Props {}

export const Analysis: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Button title="Analysis" onPress={() => navigation.navigate("Home")} />
    </Wrapper>
  );
};
