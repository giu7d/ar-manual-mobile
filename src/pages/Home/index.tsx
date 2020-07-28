import React from "react";
import { Button } from "react-native";
import { Wrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Props {}

export default function Home(props: Props) {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Wrapper>
        <Button title="Home" onPress={() => navigation.navigate("Analysis")} />
      </Wrapper>
    </Wrapper>
  );
}
