import styled from "styled-components/native";
import { Platform } from "react-native";

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.21);
  margin: 7px 10px;
  padding: 12px;
  border-radius: 7px;
`;

export const Item = styled.Text`
  color: #fff;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 18px;
  justify-content: center;
`;

export const ActionContainer = styled.TouchableOpacity`
  width: 12%;
  background-color: #ff5555;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin: 7px 10px;
`;
