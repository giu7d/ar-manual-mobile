import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Wrapper,
  Input,
  Label,
  Required,
  InputWrapper,
  ButtonWrapper,
  ButtonText,
} from "./styles";
import { GlobalStyle } from "../../styles";

interface Props {}

export default function Login(props: Props) {
  const navigation = useNavigation();

  return (
    <GlobalStyle>
      <Wrapper>
        <InputWrapper>
          <Label>
            Usuário<Required>*</Required>
          </Label>
          <Input placeholder="user@domain.com" />
        </InputWrapper>
        <InputWrapper>
          <Label>
            Senha<Required>*</Required>
          </Label>
          <Input placeholder="*******" />
        </InputWrapper>
        <ButtonWrapper onPress={() => {}}>
          <ButtonText>Hello WOrld</ButtonText>
        </ButtonWrapper>
      </Wrapper>
    </GlobalStyle>
  );
}
