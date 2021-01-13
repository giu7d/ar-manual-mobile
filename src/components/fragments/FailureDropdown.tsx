import React from "react";
import { CAOItem } from "../../models/TestBenchIndexed";
import { DropdownInput } from "./DropdownInput";

interface IProps {
  items?: CAOItem[];
  onChange?: (item: Pick<CAOItem, "id" | "description">) => void;
}

export const FailureDropdown: React.FC<IProps> = ({
  items = [],
  onChange = () => {},
}) => {
  return (
    <DropdownInput
      placeholder="Selecione a falha encontrada"
      searchablePlaceholder="Digite para buscar"
      label="Tipo da falha"
      items={items}
      defaultValue={""}
      onChange={onChange}
      required
    />
  );
};
