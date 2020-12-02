import { CameraCapturedPicture } from "expo-camera";
import React from "react";
import { Thumbnail } from "../Thumbnail";
import { Wrapper } from "./styles";

interface IProps {
  photos: CameraCapturedPicture[];
  onClick: (index: number) => void;
}

export const ImageHorizontalThumbnails: React.FC<IProps> = ({
  photos,
  onClick,
}) => {
  return (
    <Wrapper>
      {photos.map(({ uri }, i) => (
        <Thumbnail key={i} uri={uri} onPress={() => onClick(i)} />
      ))}
    </Wrapper>
  );
};
