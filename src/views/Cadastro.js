import React, {useContext, useState, useEffect} from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  ScrollView,
  Button,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as ImagePicker from 'expo-image-picker';

import { useTheme } from "react-native-paper";

//import { AuthContext } from '../components/context';
import AuthContext from "../context/authentication";
//import Users from '../model/users';

const SignInScreen = ({ navigation }) => {

    const {Login} = useContext(AuthContext);

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  //  const { signIn } = React.useContext(AuthContext);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const textInputChange = (val) => {
    if (validateEmail(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };

    const handlePasswordChange = (val) => {
        if( val.trim().length > 0) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    } 

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const [admin, setAdmin] = useState(0);
  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
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
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

    console.log(Image)
  };







      

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#050626" barStyle="light-content" />
      <ScrollView>

      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        >
          Nome
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user" color={colors.text} size={20} />
          <TextInput
            placeholder="Informe o seu nome"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
          />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 20,
            },
          ]}
        >
          Sobrenome
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user" color={colors.text} size={20} />
          <TextInput
            placeholder="Informe o seu sobrenome"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
          />
        </View>

      
      <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 20,
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="envelope" color={colors.text} size={20} />
          <TextInput
            placeholder="Informe seu email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Formato de Email incompatível.</Text>
          </Animatable.View>
        )}

<Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 20,
            },
          ]}
        >
          Cidade
        </Text>
        <View style={styles.action}>
          <FontAwesome name="home" color={colors.text} size={20} />
          <TextInput
            placeholder="Informe seu email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 20,
            },
          ]}
        >
          Estado
        </Text>
        <View style={styles.action}>
          <FontAwesome name="home" color={colors.text} size={20} />
          <TextInput
            placeholder="Informe seu email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
          />
        </View>

        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Selecione sua foto de Perfil" onPress={pickImage} />
       </View>

        

        

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 25,
            },
          ]}
        >
          Senha
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Informe sua Senha"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

         { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Senha vazia</Text>
            </Animatable.View>
            } 


        <View style={styles.button}>
          <TouchableOpacity
            //onPress={() =>{loginHandle( data.username, data.password )} }
               onPress={() => {console.log(data.email,data.password)}}
            style={[
              styles.signIn,
              {
                backgroundColor: "#050626",
                borderColor: "#fff",
                borderWidth: 1,
                marginTop: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              Criar Conta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[
              styles.signIn,
              {
                borderColor: "#050626",
                borderWidth: 1,
                marginTop: 10,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#050626",
                },
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

      </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050626",
    paddingTop: '5%'
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    marginBottom: 30,
  },

  image: {},

  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
