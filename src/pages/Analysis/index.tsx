import React from "react";
import { Button } from "react-native";
import { Wrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Props {}

export default function Analysis(props: Props) {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Button title="Analysis" onPress={() => navigation.navigate("Home")} />
    </Wrapper>
  );
}
