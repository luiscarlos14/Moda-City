import React, { useState, useEffect  } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  Button,
  Platform
} from "react-native";
import api, {TOKEN_KEY} from '../config/api'
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';



export default function Cadastro() {
  const [admin, setAdmin] = useState(0);
  const [seller, setSeller] =useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [token, setToken] = useState(
    AsyncStorage.getItem(TOKEN_KEY)
      .then((value) => {
        setToken(value);
      })
      .done()
  );

  const [image, setImage] = useState(null);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);    }
  };



  const register = () => {
    postUser(
      admin,
      seller,
      firstName,
      lastName,
      email, 
      password,
      state, 
      city,
      image,
      token
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../assets/NewHeader.png")}
        ></Image>
      </View>

      <View style={styles.names}>
        <TextInput
          placeholder="Nome"
          style={styles.textInputNames}
          onChangeText={(text) => setFirstName(text)}
        />

        <TextInput
          placeholder="Sobrenome"
          style={styles.textInputNames}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Estado"
        style={styles.textInput}
        onChangeText={(text) => setState(text)}
      />

      <TextInput
        placeholder="Cidade"
        style={styles.textInput}
        onChangeText={(text) => setCity(text)}
      />

      <View style={styles.names}>
        <TextInput
          secureTextEntry={true}
          placeholder="Senha"
          style={styles.textInputNames}
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Confirmar Senha"
          style={styles.textInputNames}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Selecione foto de perfil" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>

      <TouchableOpacity style={styles.button} onPress={() => register()}>
        <Text style={{ color: "#fff" }}>CADASTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#14152a",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerLogo: {
    width: "70%",
    marginTop: "-15%",
    marginBottom: "10%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  // logo: {
  //   width: 100,
  // },

  textInput: {
    width: "85%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#14152a",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },

  names: {
    flexDirection: "row",
  },

  textInputNames: {
    width: "42.5%",
    height: 40,
    borderWidth: 1,
    borderColor: "#14152a",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 2,
    marginRight: 2,
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
  },
});

async function postUser(
  admin,
  seller,
  firstName,
  lastName,
  email, 
  password,
  state, 
  city,
  image,
  token
)

{

  let typeImg = (image).slice(-3);
  let user = new FormData();
 
  user.append("admin", admin);
  user.append("seller", seller);
  user.append("firstName", firstName);
  user.append("lastName", lastName);
  user.append("email", email);
  user.append("password", password);
  user.append("state", state);
  user.append("city", city);
  user.append("photo",{
    name:  `${firstName}${lastName}${city}.${typeImg}`,
    type: 'image/'+ typeImg,
    uri: image
  });

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `token ${token}`,
    },
  };

  await api.post("/users", user, config).then(() => {
    alert("User add!");
  });  
}