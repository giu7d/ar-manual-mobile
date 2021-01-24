import React from "react";
import * as Card from "../Card";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

export const WorkBenchCardShimmer = () => {
  return (
    <Card.Card
      style={{
        elevation: 2,
        height: 250,
      }}
    >
      <Card.Content>
        <ShimmerPlaceHolder height={250} width={200} />
        <Card.GroupWrapper>
          <Card.ItemWrapper>
            <ShimmerPlaceHolder width={100} />
            <ShimmerPlaceHolder style={{ marginTop: 14 }} />
          </Card.ItemWrapper>
          <Card.ItemWrapper>
            <ShimmerPlaceHolder width={120} />
            <ShimmerPlaceHolder style={{ marginTop: 14 }} />
          </Card.ItemWrapper>
        </Card.GroupWrapper>
      </Card.Content>
    </Card.Card>
  );
};
