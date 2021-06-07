import React from "react";
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongURL,
  ShortLink,
  ShortLinkURL,
} from "./styles";
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Share,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";

const ModalLink = ({ onClose, data }) => {
  function copiarLink() {
    Clipboard.setString(data.link);
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`,
      });
      if (result.action === Share.sharedAction) {
        if (!result.activityType) {
          alert("okok");
        }
      } else if (result.action === Share.dismissedAction) {
        alert("ojk");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity>
            <Feather name="x" calor="#212743" size={30} onPress={onClose} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="share"
              calor="#212743"
              size={30}
              onPress={handleShare}
            />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongURL numberOfLines={1}>{data.long_url}</LongURL>
          <ShortLink activeOpacity={1} onPress={copiarLink}>
            <ShortLinkURL numberOfLines={1}>{data.link}</ShortLinkURL>
            <TouchableOpacity onPress={copiarLink}>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLink>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
};

export default ModalLink;
