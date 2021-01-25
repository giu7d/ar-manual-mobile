import React from "react";
import { View, Text } from "react-native";
import { ContentHeaderWrapper, ContentWrapper, Wrapper } from "./styles";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

export const InstructionCardShimmer = () => {
  return (
    <Wrapper style={{ maxHeight: 225 }}>
      <ContentWrapper>
        <ContentHeaderWrapper>
          <ShimmerPlaceHolder width={64} style={{ marginVertical: 8 }} />
        </ContentHeaderWrapper>
        <ShimmerPlaceHolder width={250} style={{ marginVertical: 24 }} />
        <ShimmerPlaceHolder width={275} style={{ marginVertical: 4 }} />
        <ShimmerPlaceHolder width={150} style={{ marginVertical: 4 }} />
        <ShimmerPlaceHolder width={250} style={{ marginVertical: 4 }} />
      </ContentWrapper>
    </Wrapper>
  );
};
