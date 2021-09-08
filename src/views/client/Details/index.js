import React, { useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { ID_PRODUCT, TOKEN_KEY, SERVER } from "../../../config/api";
import { Container, Header, HeaderImage, Body, BodyTitle, BodyTitleSecondary, Size, Price } from "./styled";

import { Text, View } from "react-native";

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
  
  async function getProdutos() {
    const res = (
      await api.get( `/products/${produto}`, {
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
    .catch()
 }, [token])



  //console.log(list[0]);
  return (
    <Container>

{list.map((row)=>(
  <>
 <Header>
 <HeaderImage source={{ uri: `${SERVER}/${row.photo}` }} />
</Header>
<Body>
 
 <BodyTitle>{row.name}</BodyTitle>
 <BodyTitleSecondary>{row.description}</BodyTitleSecondary>
 <Size>{`Tamanhos Disponíveis: ${row.size}`}</Size>
 <Price>{`Valor: R$ ${row.price}`}</Price>
</Body> 
</>

))}
      

    </Container>
  )

        }

const Loading = () =>{
  return(
    <View> 
      <Text>Carregando</Text>
    </View>
  )
}

