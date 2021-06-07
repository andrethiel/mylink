import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/statusBar";
import Menu from "../../components/menu";
import {
  Logo,
  ContainerLogo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import ModalLink from "../../components/modal";
import { api } from "../../services/api";
import { saveLink } from "../../utils/store";

export default function Home() {
  const [LinkInput, setLinkInput] = useState("");
  const [Open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [URL, setURL] = useState({});

  async function handlershorlink() {
    setLoading(true);
    try {
      const response = await api.post("/shorten", {
        long_url: LinkInput,
      });
      setURL(response.data);
      setLoading(false);
      saveLink("links", response.data);
      Keyboard.dismiss();
      setLinkInput("");
      setOpen(true);
    } catch (error) {
      alert(error.message);
      Keyboard.dismiss();
      setLinkInput("");
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#1ddbb9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage backgroundColor="#1ddbb9" barStyle="light-content" />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/sem.png")}
              resizeMode="contain"
            />
          </ContainerLogo>
          <ContainerContent>
            <Title>Link</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>
            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={LinkInput}
                onChangeText={(text) => setLinkInput(text)}
              />
            </ContainerInput>
            <ButtonLink onPress={handlershorlink}>
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={Open} transparent animationType="slide">
          <ModalLink onClose={() => setOpen(false)} data={URL} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
