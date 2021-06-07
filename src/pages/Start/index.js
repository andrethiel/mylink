import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppIntro from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react/cjs/react.development";

const slide = [
  {
    key: "1",
    title: "titulo",
    text: "sub titulo",
    image: require("../../assets/sem.png"),
  },
  {
    key: "2",
    title: "titulo",
    text: "sub titulo",
    image: require("../../assets/sem.png"),
  },
  {
    key: "3",
    title: "titulo",
    text: "sub titulo",
    image: require("../../assets/sem.png"),
  },
];

const Start = () => {
  const [showHome, setshowHome] = useState(false);

  useEffect(() => {
    function verificainto() {
      const response = AsyncStorage.getItem("Into");
      console.log(response);
    }
    verificainto();
  });

  const navigation = useNavigation();

  function pulainto() {
    AsyncStorage.setItem("Into", "true");
    navigation.navigate("Home");
  }

  function renderSlides({ item }) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{ resizeMode: "cover", height: "73%", width: "100%" }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#b5b5b5",
            paddingHorizontal: 25,
            fontSize: 15,
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  }

  if (showHome) {
    return <Text>entrou na home</Text>;
  } else {
    return (
      <AppIntro
        renderItem={renderSlides}
        data={slide}
        activeDotStyle={{
          backgroundColor: "#000",
          width: 30,
        }}
        renderDoneButton={() => <Text>Acessar</Text>}
        renderPrevButton={() => <Text>Anterior</Text>}
        renderNextButton={() => <Text>Proximo</Text>}
        onDone={pulainto}
      />
    );
  }
};

export default Start;
