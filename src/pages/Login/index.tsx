import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Wrapper } from "./styles";

interface Props {}

export default function Login(props: Props) {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Wrapper>
        <Button title="Login" onPress={() => navigation.navigate("Home")} />
      </Wrapper>
    </Wrapper>
  );
}
