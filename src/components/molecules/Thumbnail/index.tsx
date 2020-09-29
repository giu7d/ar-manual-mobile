import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { CloseButton, Image, Wrapper } from "./styles";

interface IThumbnailProps {
  uri: string;
  onPress?: () => void;
}

export const Thumbnail: React.FC<IThumbnailProps> = ({
  uri,
  onPress = () => {},
}) => {
  return (
    <Wrapper>
      <Image source={{ uri }} />
      <CloseButton style={{ elevation: 1 }} onPress={onPress}>
        <Icon name="x" size={24} />
      </CloseButton>
    </Wrapper>
  );
};
