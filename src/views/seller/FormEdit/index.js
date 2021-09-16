import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import api, { TOKEN_KEY, ID_USER, ID_PRODUCT } from "../../../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductRegistration() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");



  const [userID, setUserID] = useState(
    AsyncStorage.getItem(ID_USER)
      .then((value) => {
        setUserID(value);
      })
      .done()
  );

  const [idProducto, setidProducto] = useState(
    AsyncStorage.getItem(ID_PRODUCT)
      .then((value) => {
        setidProducto(value);
      })
      .done()
  );

  const [productID, setProductID] = useState(
    AsyncStorage.getItem(ID_PRODUCT)
      .then((value) => {
        setProductID(value);
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
      await api.get( `/products/${productID}`, {
        headers: { Authorization: `token ${token}` },
      })
    ).data.response;
    return res;
  }



  const register = () => {
    postProduct(name, description, price, color, size, idProducto, token);
  };

  return (
    <ScrollView style={styles.containerGeneral}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            style={styles.logo}
            source={require("../../../assets/NewHeader.png")}
          ></Image>
        </View>

        <TextInput
          placeholder="Nome do Produto"
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          placeholder="Descrição"
          style={styles.textInput}
          onChangeText={(text) => setDescription(text)}
        />

        <TextInput
          placeholder="Preço"
          style={styles.textInput}
          onChangeText={(text) => setPrice(text)}
        />

        <TextInput
          placeholder="Cor"
          style={styles.textInput}
          onChangeText={(text) => setColor(text)}
        />

        <TextInput
          placeholder="Tamanho Disponível"
          style={styles.textInput}
          onChangeText={(text) => setSize(text)}
        />

        {/* <TextInput
          placeholder="user"
          style={styles.textInput}
          onChangeText={(text) => setUser(text)}
        /> */}

       

        <TouchableOpacity style={styles.button} onPress={() => register()}>
          <Text style={{ color: "#fff" }}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerGeneral: {
    backgroundColor: "#fff",
    flex: 1,
  },

  container: {
    flex: 1,
    // backgroundColor: "#14152a",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerLogo: {
    width: "70%",
    marginBottom: "10%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  textInput: {
    width: "75%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#14152a",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },

  button: {
    width: "70%",
    marginTop: 15,
    height: 40,
    backgroundColor: "#14152a",
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
});

async function postProduct(
  name,
  description,
  price,
  color,
  size,
  userID,
  token
) 
{


  api.patch(`/products/${userID}`, {
        name: name,
        description: description,
        price: price,
        color: color,
        size: size
      },
      {
        headers: { Authorization: `token ${token}` },
      })
      .then(function (response) {
        alert("editado")
      })

 


}
