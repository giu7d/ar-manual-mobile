import React from "react";

import { FormInputWrapper } from "./styles";
import { Label, LabelRequired } from "../../atoms/Label";
import { Input } from "../../atoms/Input";

export interface IFormInputProps {
  label: string;
  required?: boolean;
}

export const FormInput: React.FC<IFormInputProps> = ({
  label,
  required = false,
  ...props
}) => {
  return (
    <FormInputWrapper>
      <Label>
        {label}
        {required && <LabelRequired>*</LabelRequired>}
      </Label>
      <Input {...Object.assign(props)} />
    </FormInputWrapper>
  );
};
