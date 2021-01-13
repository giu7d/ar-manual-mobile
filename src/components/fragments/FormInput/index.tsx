import React from "react";
import { TextInputProps } from "react-native";

import { Label, LabelRequired } from "../Label";
import { Input } from "../Input";
import { FormInputWrapper } from "./styles";

export interface IFormInputProps {
  label: string;
  required?: boolean;
  inputProps?: TextInputProps;
}

export const FormInput: React.FC<IFormInputProps> = ({
  label,
  required = false,
  inputProps = {},
}) => {
  return (
    <FormInputWrapper>
      <Label>
        {label}
        {required && <LabelRequired>*</LabelRequired>}
      </Label>
      <Input {...inputProps} />
    </FormInputWrapper>
  );
};
