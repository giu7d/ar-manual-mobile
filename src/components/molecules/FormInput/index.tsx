import React from "react";
import { TextInputProps } from "react-native";

import { FormInputWrapper } from "./styles";
import { Label, LabelRequired } from "../../atoms/Label";
import { Input } from "../../atoms/Input";

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
