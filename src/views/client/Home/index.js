import React, { useState } from "react";

import {
  Container,
  Header,
  Body,
  HeaderBody,
  Footer,
  Button,
  Image,
  MainHeader,
  Cards,
} from "./styled";

import banco from "../../../bdteste";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../../components/Card";
import SelectCity from "../../../components/SelectCity";
import { ScrollView, TouchableOpacity, Text } from "react-native";

export default function Home({ navigation }) {
  const bd = banco;
  return (
    <Container>
      <Header>
        <Button onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" color="white" size={50} />
        </Button>
        <Image source={require("../../../assets/header.png")} />
      </Header>
      <MainHeader>
        <SelectCity />
      </MainHeader>

      <Body>
        <ScrollView>
          <HeaderBody>Últimos Lançamentos</HeaderBody>
          <Cards>
            {bd
              .slice(0)
              .reverse()
              .map((row, i) => (
                <Card
                  key={i}
                  imagem={require("../../../assets/camisa1.jpg")}
                  title={row.title}
                  value={row.value}
                  onClick={() => navigation.navigate("Detalhes")}
                />
              ))}
          </Cards>
        </ScrollView>
      </Body>
    </Container>
  );
}
