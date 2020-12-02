import React, { ReactNodeArray, useRef, useState } from "react";
import { LayoutChangeEvent, ScrollView } from "react-native";

interface ItemPosition extends LayoutChangeEvent {
  id: string;
}

interface Props {
  renderItems: (
    onLayout: (id: string, e: LayoutChangeEvent) => void,
    toNext: (id: string) => void,
    toEnd: () => void
  ) => ReactNodeArray;
}

const ProgressiveScroll: React.FC<Props> = (props) => {
  const scrollRef = useRef<ScrollView>(null);

  const [itemsPosition, setItemsPosition] = useState<ItemPosition[]>([]);

  const onLayout = (id: string, e: LayoutChangeEvent) => {
    setItemsPosition((state) => [
      ...state,
      {
        ...e,
        id,
      },
    ]);
  };

  const toNext = (id: string) => {
    if (scrollRef.current) {
      const item = itemsPosition.find((item) => item.id === id);

      if (!item) {
        throw new Error("toNext: no item id found!");
      }

      const { y, height } = item.nativeEvent.layout;

      scrollRef.current.scrollTo({ y: y - height, animated: true });
    }
  };

  const toEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd();
    }
  };

  return (
    <ScrollView ref={scrollRef}>
      {props.children}
      {props.renderItems(onLayout, toNext, toEnd)}
    </ScrollView>
  );
};

export default ProgressiveScroll;
