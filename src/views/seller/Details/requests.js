import api, {ID_PRODUCT, TOKEN_KEY} from "../../../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, {useEffect, useState} from "react";

const getProdutos = () => {

  const [produto, setProduto] = useState([]);

  useEffect(()=>{
    AsyncStorage.getItem(ID_PRODUCT)
    .then((value) => {
      setProduto(value);
    })
    .done()
  }, [])

  const [token, setToken] = useState(
    AsyncStorage.getItem(TOKEN_KEY)
      .then((value) => {
        setToken(value);
      })
      .done()
  );

return getProdutosT(produto, token)

}

async function getProdutosT(produto, token) {
  const res = (
    await api.get(`/products/${produto}`, {
      headers: { Authorization: `token ${token}` },
    })
  ).data.response;
  return res;
}


export default getProdutos;