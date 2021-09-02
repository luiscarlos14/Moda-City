import React from "react";

import { Container, Header, Body, HeaderBody, Footer, Button, Image, MainHeader } from "./styled";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home({ navigation }) {
  return (
    <Container>
      <Header>
        <Button onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" color="white" size={50} />
        </Button>
        <Image source={require("../../../assets/header.png")} />
      </Header>
    <MainHeader>
      
    </MainHeader>

      <Body>
        <HeaderBody>Últimos Lançamentos</HeaderBody>
      </Body>
      <Footer />
    </Container>
  );
}
