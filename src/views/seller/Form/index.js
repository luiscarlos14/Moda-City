import React, { useState, useEffect } from "react";
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
  Platform,
  ScrollView,
} from "react-native";
import api, { TOKEN_KEY, ID_USER } from "../../../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export default function ProductRegistration() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [user, setUser] = useState();

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

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
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
      setImage(result.uri);
    }
  };

  const register = () => {
    postProduct(name, description, price, color, size, image, userID, token);
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
          placeholder="Descri????o"
          style={styles.textInput}
          onChangeText={(text) => setDescription(text)}
        />

        <TextInput
          placeholder="Pre??o"
          style={styles.textInput}
          onChangeText={(text) => setPrice(text)}
        />

        <TextInput
          placeholder="Cor"
          style={styles.textInput}
          onChangeText={(text) => setColor(text)}
        />

        <TextInput
          placeholder="Tamanho Dispon??vel"
          style={styles.textInput}
          onChangeText={(text) => setSize(text)}
        />

        {/* <TextInput
          placeholder="user"
          style={styles.textInput}
          onChangeText={(text) => setUser(text)}
        /> */}

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button title="Selecione a Foto do Produto" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>

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
  image,
  userID,
  token
) 


{

  let typeImg = image.slice(-3);
  let product = new FormData();

  product.append("name", name);
  product.append("description", description);
  product.append("price", price);
  product.append("color", color);
  product.append("size", size);
  product.append("photo", {
    name: `${name}${color}.${typeImg}`,
    type: "image/" + typeImg,
    uri: image,
  });
  product.append("user", userID);

  console.log(product);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `token ${token}`,
    },
  };

  alert(api)

  await api.post("/products", product, config).then(() => {
    alert("Product add!");
  }); 
}
