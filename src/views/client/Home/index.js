import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { ID_PRODUCT, TOKEN_KEY, ID_SELLER } from "../../../config/api";
import AuthContext from "../../../context/authentication";

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

import city from "../../../city";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../../components/Card";
import SelectCity from "../../../components/SelectCity";

import { ScrollView, TouchableOpacity, Modal, Text } from "react-native";

export default function Home({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState([]);

  const [token, setToken] = useState(
    AsyncStorage.getItem(TOKEN_KEY)
      .then((value) => {
        setToken(value);
      })
      .done()
  );

  async function getProdutos() {
    const res = (
      await api.get("/products", {
        headers: { Authorization: `token ${token}` },
      })
    ).data.response;
    return res;
  }


  useEffect(() => {
    getProdutos()
      .then((result) => {
        setList(result);
      })
      .catch();
  }, [token]);


  function RedirectDetails(id) {
    produtoDetails(id);
    console.log(id)
  }

  async function produtoDetails(i,s){
    
    try {
      await AsyncStorage.setItem(ID_PRODUCT, `${i}`);
      await AsyncStorage.setItem(ID_SELLER, `${s}`);
      navigation.navigate("Detalhes");
    } catch (e) {
      console.log(e);
    }
    console.log(useEffect(() =>{
      console.log(
      AsyncStorage.getItem(ID_PRODUCT)
      .then((value) => {
        console.log(value);
      })
      .done()
    )}))

  }


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
          onChangeSelect={() => console.log('id')}
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
            {list.map((row, i) => (
                <Card
                  key={i}
                  id={row.id}
                  photo={row.photo}
                  title={row.name}
                  value={row.price}
                  redirect={RedirectDetails}
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
