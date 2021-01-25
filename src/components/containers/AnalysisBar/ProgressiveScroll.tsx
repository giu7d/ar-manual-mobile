import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { LayoutRectangle, ScrollView } from "react-native";
import { useStores } from "../../../hooks/useStores";

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

export const ProgressiveScroll: React.FC<Props> = observer((props) => {
  const { analysisStore } = useStores();
  const scrollRef = useRef<ScrollView>(null);
  const [itemsPosition, setItemsPosition] = useState<ItemPosition[]>([]);

  useEffect(() => {
    if (itemsPosition.length !== 0) {
      toNext(analysisStore.selectedInstruction?.id);
    }
  }, [analysisStore.selectedInstruction]);

  const onLayout = (layout: LayoutRectangle, id: string) => {
    const exists = itemsPosition.find((item) => item.id === id);
    if (!exists)
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
          y: item.y,
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
});
