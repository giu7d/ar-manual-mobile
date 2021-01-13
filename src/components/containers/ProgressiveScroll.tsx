import React, { useRef, useState } from "react";
import { LayoutRectangle, ScrollView } from "react-native";

const ITEM_GAP = 250;

interface ItemPosition extends LayoutRectangle {
  id: string;
}

interface Props {
  renderItems: (
    onLayout: (layout: LayoutRectangle, id: string) => void,
    toNext: (id?: string) => void,
    toEnd: () => void
  ) => JSX.Element | JSX.Element[];
}

const ProgressiveScroll: React.FC<Props> = (props) => {
  const scrollRef = useRef<ScrollView>(null);

  const [itemsPosition, setItemsPosition] = useState<ItemPosition[]>([]);

  const onLayout = (layout: LayoutRectangle, id: string) => {
    setItemsPosition((state) => [
      ...state,
      {
        ...layout,
        id,
      },
    ]);
  };

  const toNext = (id?: string) => {
    if (scrollRef.current) {
      const item = itemsPosition.find((item) => item.id === id);

      if (item) {
        scrollRef.current.scrollTo({
          y: item.y - ITEM_GAP,
          animated: true,
        });
      } else {
        toEnd();
      }
    }
  };

  const toEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd();
    }
  };

  return (
    <ScrollView ref={scrollRef}>
      {props.renderItems(onLayout, toNext, toEnd)}
    </ScrollView>
  );
};

export default ProgressiveScroll;
