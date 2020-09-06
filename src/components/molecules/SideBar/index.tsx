import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { useSpring, animated } from "react-spring";
import { Feather as Icon } from "@expo/vector-icons";

import { Wrapper } from "./styles";
import { ITheme } from "../../../theme";
import { IconButton } from "../../atoms/IconButton";

interface ISideBarProps {
  children?: JSX.Element[];
  enable?: boolean;
  handleChange?: (state: boolean) => void;
  position?: "right" | "left";
}

export const SideBar: React.FC<ISideBarProps> = ({
  children,
  enable = true,
  position = "right",
  handleChange = () => {},
}) => {
  const theme = useTheme() as ITheme;
  const animatedProps = useSpring({
    opacity: enable ? 1 : 0,
    right: enable ? 0 : -150,
  });

  const AnimatedWrapper = animated(Wrapper);

  return enable ? (
    <>
      <StatusBar style="auto" backgroundColor={theme.colors.foreground} />
      <AnimatedWrapper
        side={position}
        style={[
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.22,
            shadowRadius: 1.22,
            elevation: 5,
          },
          animatedProps,
        ]}
      >
        <IconButton
          style={{ alignSelf: "flex-end" }}
          onPress={() => handleChange(false)}
        >
          <Icon name="x" size={24} />
        </IconButton>
        {children}
      </AnimatedWrapper>
    </>
  ) : (
    <></>
  );
};
