import React, { useState } from "react";

import {
  Container,
  Header,
  Body,
  HeaderBody,
  HeaderBodyText,
  Footer,
  Button,
  Image,
  MainHeader,
  Cards,
  ModalContainer,
  ModalVoltar,
  ModalVoltarText,
  ModalHeader,
  ModalTitle,
} from "./styled";

import banco from "../../../bdteste";
import city from "../../../city";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../../components/Card";
import SelectCity from "../../../components/SelectCity";
import { ScrollView, TouchableOpacity, Modal, Text } from "react-native";

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
        <SelectCity
          options={city}
          onChangeSelect={() => console.log(id)}
          text="Selecione uma opção"
        />
      </MainHeader>

      <Body>
        <ScrollView>
          <HeaderBody>
            <HeaderBodyText>Últimos Lançamentos</HeaderBodyText>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <MaterialCommunityIcons name="filter" color="black" size={30} />
            </TouchableOpacity>
          </HeaderBody>

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

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalVoltar onPress={() => setModalVisible(false)}>
            <MaterialCommunityIcons
              name="chevron-down"
              color="black"
              size={50}
            />
            <ModalVoltarText>Voltar</ModalVoltarText>
          </ModalVoltar>
          <ModalHeader>
            <ModalTitle>Categorias</ModalTitle>
          </ModalHeader>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
