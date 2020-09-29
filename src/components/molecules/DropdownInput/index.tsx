import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { CAOItem } from "../../../models/CAOItem";
import { Label, LabelRequired } from "../../atoms/Label";
import { Wrapper } from "./styles";

interface IDropdownInputProps {
  items: CAOItem[];
  defaultValue: string;
  label: string;
  onChange?: (item: any) => void;
  required?: boolean;
}

export const DropdownInput: React.FC<IDropdownInputProps> = ({
  items,
  defaultValue,
  label,
  required = false,
  onChange = () => {},
}) => {
  return (
    <Wrapper>
      <Label>
        {label}
        {required && <LabelRequired>*</LabelRequired>}
      </Label>
      <DropDownPicker
        items={items.map((dao) => ({
          label: dao.description,
          value: dao.id,
        }))}
        defaultValue={defaultValue}
        onChangeItem={onChange}
        searchable={true}
        containerStyle={{ width: "100%", height: 64, borderRadius: 8 }}
        style={{ backgroundColor: "#FFF", borderColor: "#CCC" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{
          backgroundColor: "#fafafa",
        }}
        dropDownMaxHeight={450}
      />
    </Wrapper>
  );
};
