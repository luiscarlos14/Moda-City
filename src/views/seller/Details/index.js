import React, { useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { ID_PRODUCT, TOKEN_KEY, SERVER } from "../../../config/api";
import { Container, Header, HeaderImage, Body, BodyTitle, BodyTitleSecondary, Size, Price, Button, ButtonTwo } from "./styled";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Text, View } from "react-native";

export default function Details({navigation}) {

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

 <Button onPress={() => navigation.navigate("Editar Foto")}>
 <MaterialCommunityIcons name="camera-outline" color="black" size={35} />
 </Button>
 <HeaderImage source={{ uri: `${SERVER}/${row.photo}` }} />


</Header>

<Body>

   
 <Button onPress={() => navigation.navigate("Editar Produto")}>
 <MaterialCommunityIcons name="square-edit-outline" color="black" size={35} />
 </Button>
 
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

