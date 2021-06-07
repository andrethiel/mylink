import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem";
import Menu from "../../components/menu";
import StatusBarPage from "../../components/statusBar";
import { Container, Title, ListLinks, ContainerVazio, Warnig } from "./styles";
import { getLinks, deleteLink } from "../../utils/store";
import { useIsFocused } from "@react-navigation/native";
import ModalLink from "../../components/modal";
import { Modal, ActivityIndicator } from "react-native";

export default function Links() {
  const [links, setLinks] = useState([]);
  const [URL, setURL] = useState({});
  const [Open, setOpen] = useState(false);
  const [loading, setloading] = useState(true);

  const isFocus = useIsFocused();

  useEffect(() => {
    async function get() {
      const response = await getLinks("links");
      setLinks(response);
      setloading(false);
    }
    get();
  }, [isFocus]);

  function handleItem(item) {
    setURL(item);
    setOpen(true);
  }

  async function handleDelete(id) {
    const response = await deleteLink(links, id);
    setLinks(response);
  }

  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Links</Title>
      {loading && (
        <ContainerVazio>
          <ActivityIndicator color="#fff" size={25} />
        </ContainerVazio>
      )}
      {!loading && links.length === 0 && (
        <ContainerVazio>
          <Warnig>Nenhum Link</Warnig>
        </ContainerVazio>
      )}
      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem data={item} select={handleItem} deleteItem={handleDelete} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showVerticalScrollIndicator={false}
      ></ListLinks>
      <Modal visible={Open} transparent animationType="slide">
        <ModalLink onClose={() => setOpen(false)} data={URL} />
      </Modal>
    </Container>
  );
}
