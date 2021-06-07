import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ContainerButton, Item, ActionContainer } from "./styled";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ data, select, deleteItem }) {
  function actions() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather name="trash" color={"#fff"} size={24} />
      </ActionContainer>
    );
  }

  return (
    <View>
      <Swipeable renderRightActions={actions}>
        <ContainerButton activeOpacity={0.9} onPress={() => select(data)}>
          <Feather name="link" color="#fff" size={24} />
          <Item numberOfLines={1}>{data.long_url}</Item>
        </ContainerButton>
      </Swipeable>
    </View>
  );
}

export default ListItem;
