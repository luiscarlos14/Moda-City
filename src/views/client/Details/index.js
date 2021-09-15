import React, { useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, {
  ID_PRODUCT,
  TOKEN_KEY,
  SERVER,
  ID_SELLER,
} from "../../../config/api";
import {
  Container,
  Header,
  HeaderImage,
  Body,
  BodyTitle,
  BodyTitleSecondary,
  Size,
  Price,
  Footer,
  NameFooter,
  ImageFooter,
} from "./styled";

import { ScrollView, Text, View } from "react-native";

export default function Details() {
  const [produto, setProduto] = useState(
    AsyncStorage.getItem(ID_PRODUCT)
      .then((value) => {
        setProduto(value);
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

  const [list, setList] = useState([]);

  const [seller, setSeller] = useState([]);
  const [user, setUser] = useState([]);

  async function getProdutos() {
    const res = (
      await api.get(`/products/${produto}`, {
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

  useEffect(() => {
    {
      list.map((row) => setSeller(row.user));
    }
  }, [list]);

  async function getUser() {
    const res = (
      await api.get(`/users/${seller}`, {
        headers: { Authorization: `token ${token}` },
      })
    ).data.response;
    return res;
  }

  useMemo(() => {
    getUser()
      .then((result) => {
        setUser(result);
      })
      .catch();
  }, [token, seller]);

  console.log(user);

  return (
   
    <Container>

      {list.map((row) => (
        <>
         
          <Header>
            <HeaderImage source={{ uri: `${SERVER}/${row.photo}` }} />
          </Header>

          <ScrollView style={{flex: 1.25}}>
          <Body>
            <BodyTitle>{row.name}</BodyTitle>
            <BodyTitleSecondary>{row.description}</BodyTitleSecondary>
            <Size>{`Tamanhos Disponíveis: ${row.size}`}</Size>
            <Price>{`Valor: R$ ${row.price}`}</Price>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Footer>
                {user.map((row) => (
                  <>
                    <ImageFooter
                      key={row.id}
                      source={{ uri: `${SERVER}/${row.photo}` }}
                    />

                    <Text>{ `${row.firstName} ${row.lastName}`}</Text>
                  </>
                ))}
              </Footer>
            </View>

          </Body>
        </ScrollView>
        </>
      ))}
    </Container>
  );
}

const Loading = () => {
  return (
    <View>
      <Text>Carregando</Text>
    </View>
  );
};
