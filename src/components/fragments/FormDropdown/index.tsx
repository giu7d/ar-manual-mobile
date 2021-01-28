import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { Label, LabelRequired } from "../Label";
import { Wrapper } from "./styles";

interface IFormDropdownProps {
  items: {
    id: string;
    description: string;
  }[];
  defaultValue: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  searchablePlaceholder?: string;
  onChange?: (item: { id: string; description: string }) => void;
}

export const FormDropdown: React.FC<IFormDropdownProps> = ({
  items,
  defaultValue,
  label,
  required = false,
  placeholder = "",
  searchablePlaceholder = "",
  onChange = () => {},
}) => {
  return (
    <Wrapper>
      <Label>
        {label}
        {required && <LabelRequired>*</LabelRequired>}
      </Label>
      <DropDownPicker
        searchablePlaceholder={searchablePlaceholder}
        placeholder={placeholder}
        items={items.map((dao) => ({
          label: dao.description,
          value: dao.id,
        }))}
        defaultValue={defaultValue}
        onChangeItem={(item) =>
          onChange({ id: item.value, description: item.label })
        }
        searchable={true}
        containerStyle={{ width: "100%", height: 64, borderRadius: 8 }}
        style={{ backgroundColor: "#FFF", borderColor: "#CCC" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{
          backgroundColor: "#fafafa",
          elevation: 3,
        }}
        dropDownMaxHeight={450}
      />
    </Wrapper>
  );
};
