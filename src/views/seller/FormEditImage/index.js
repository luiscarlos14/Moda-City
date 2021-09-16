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
import api, { TOKEN_KEY, ID_USER, ID_PRODUCT } from "../../../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export default function ProductRegistration() {

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
    postProduct(image, productID, token);
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
  image,
  userID,
  token
) 


{

  let typeImg = image.slice(-3);
  let name = image.slice(5);
  let product = new FormData();


  product.append("photo", {
    name: `${name}.${typeImg}`,
    type: "image/" + typeImg,
    uri: image,
  });

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `token ${token}`,
    },
  };

  alert(api)

  await api.patch(`/products/photo/${userID}`, product, config).then(() => {
    alert("Product add!");
  }); 
}
