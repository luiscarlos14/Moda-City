import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { ID_PRODUCT, TOKEN_KEY } from '../../../config/api';

import { Text, View } from 'react-native';

export default function Details() {

  const [produto, setProduto] = useState(
    AsyncStorage.getItem(ID_PRODUCT)
    .then((value) => {
      setProduto(value);
    })
    .done()
  );

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
      await api.get(`/products/${produto}`, {
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

  console.log(list)

 return (
   <View><Text>fff</Text></View>
  );
}