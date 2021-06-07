import React from "react";
import { View, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function StatusBarPage(props) {
  const isFocus = useIsFocused();
  return isFocus ? <StatusBar {...props} /> : null;
}
