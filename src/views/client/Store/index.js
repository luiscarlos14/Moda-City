import React, { useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, {
  ID_PRODUCT,
  TOKEN_KEY,
  ID_USER,
  SERVER,
} from "../../../config/api";
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
  ButtonAdd,
  Selector,
  TextSelect,
  ModalContainer,
  ModalVoltar,
  ModalVoltarText,
  ModalHeader,
  ModalTitle,
} from "./styled";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../../components/Card";

import { ScrollView, TouchableOpacity, Modal, Text } from "react-native";

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);

  const [userID, setUserID] = useState(
    AsyncStorage.getItem(ID_USER)
      .then((value) => {
        setUserID(value);
      })
      .done()
  );

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

  async function getUser() {
    const res = (
      await api.get(`/users/${userID}`, {
        headers: { Authorization: `token ${token}` },
      })
    ).data.response;
    return res;
  }

  useMemo(() => {
    getProdutos()
      .then((result) => {
        setList(result);
      })
      .catch();
  }, [token]);

  useMemo(() => {
    getUser()
      .then((result) => {
        setUser(result);
      })
      .catch();
  }, [token]);

  function RedirectDetails(id) {
    produtoDetails(id);
    console.log(id);
  }

  async function produtoDetails(i) {
    try {
      await AsyncStorage.setItem(ID_PRODUCT, `${i}`);
      navigation.navigate("Detalhes do Produto");
    } catch (e) {
      console.log(e);
    }
    console.log(
      useEffect(() => {
        console.log(
          AsyncStorage.getItem(ID_PRODUCT)
            .then((value) => {
              console.log(value);
            })
            .done()
        );
      })
    );
  }

  console.log(user)

  return (
    <Container>
      <Header>
        <Button onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" color="#636573"  size={50} />
        </Button>
        {user.map((row) => (
          <Image key={row.id} source={{ uri: `${SERVER}/${row.photo}` }} />
        ))}
      </Header>
      <MainHeader>
        <ButtonAdd onPress={() => navigation.navigate("Novo Produto")}>
          <Text style={{color: 'black', fontSize: 25}}>Novo Produto</Text>
          <MaterialCommunityIcons name="plus" color="black" size={50} />
        </ButtonAdd>
      </MainHeader>

      <Body>
        <ScrollView>
          <HeaderBody>
            <HeaderBodyText>Meus Produtos</HeaderBodyText>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
            ></TouchableOpacity>
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
    </Container>
  );
}
