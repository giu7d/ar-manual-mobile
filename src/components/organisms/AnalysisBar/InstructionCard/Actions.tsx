import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { ITheme } from "../../../../theme";
import { IconButton } from "../../../atoms/IconButton";
import { Button } from "../../../molecules/Button";

interface IActionsProps {
  status?: "pending" | "success" | "failure";
  handleStatusChange?: (newStatus: "pending" | "success" | "failure") => void;
}

export const Actions: React.FC<IActionsProps> = ({
  status = "pending",
  handleStatusChange = () => {},
}) => {
  const theme = useTheme() as ITheme;

  if (status === "success") {
    return (
      <>
        <Button
          onPress={() => handleStatusChange("pending")}
          touchableProps={{
            style: {
              alignSelf: "center",
              minWidth: "90%",
              backgroundColor: theme.colors.primary,
            },
          }}
          textProps={{
            style: {
              color: theme.colors.foreground,
            },
          }}
        >
          Aprovado
        </Button>
      </>
    );
  }

  if (status === "failure") {
    return (
      <>
        <Button
          onPress={() => handleStatusChange("pending")}
          touchableProps={{
            style: {
              alignSelf: "center",
              minWidth: "90%",
              backgroundColor: theme.colors.danger,
            },
          }}
          textProps={{
            style: {
              color: theme.colors.foreground,
            },
          }}
        >
          Reprovado
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        onPress={() => handleStatusChange("success")}
        touchableProps={{
          style: {
            minWidth: "70%",
            backgroundColor: theme.colors.foreground,
          },
        }}
        textProps={{
          style: {
            color: theme.colors.primary,
          },
        }}
      >
        Aprovar
      </Button>
      <IconButton
        onPress={() => handleStatusChange("failure")}
        style={{ backgroundColor: theme.colors.foreground }}
      >
        <Icon name="alert-triangle" size={24} color={theme.colors.danger} />
      </IconButton>
    </>
  );
};
