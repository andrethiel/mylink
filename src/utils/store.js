import AsyncStore from "@react-native-async-storage/async-storage";

export async function getLinks(key) {
  const response = await AsyncStore.getItem(key);
  let links = JSON.parse(response) || [];

  return links;
}

export async function saveLink(key, link) {
  let links = await getLinks(key);
  const hasLinks = links.some((item) => item.id === link.id);
  if (!hasLinks) {
    links.push(link);
    await AsyncStore.setItem(key, JSON.stringify(links));
    console.log(links);
  }
}

export async function deleteLink(link, id) {
  let links = link.filter((item) => {
    return item.id !== id;
  });
  await AsyncStore.setItem("links", JSON.stringify(links));
  return links;
}
