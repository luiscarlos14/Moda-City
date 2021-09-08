import React, {useContext} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonSair from "./ButtonSair";
import AuthContext from '../context/authentication';

export default function sidebar({ navigation }) {
  //const { Sair } = useContext(AuthContext);

  return (
    <Container>
      <Header>
        <Button onPress={() => navigation.closeDrawer()}>
          <MaterialCommunityIcons name="close" color="black" size={50} />
        </Button>
        <Image>
          <ImageHeader source={require("../assets/luis.jpeg")} />
          <TextHeader>LUIS CARLOS BARROS</TextHeader>
        </Image>
      </Header>

      <Body>
        <ButtonNavigator  onPress={() => navigation.navigate("HomeAdmin")}>
          <ButtonNavigatorText>Home</ButtonNavigatorText>
        </ButtonNavigator>
        <ButtonNavigator onPress={() => navigation.navigate("Store")}>
          <ButtonNavigatorText >Minha Loja</ButtonNavigatorText>
        </ButtonNavigator>
        <ButtonNavigator>
          <ButtonNavigatorText>Meus Produtos</ButtonNavigatorText>
        </ButtonNavigator>
        <ButtonNavigator>
          <ButtonNavigatorText>Home</ButtonNavigatorText>
        </ButtonNavigator>
      </Body>
      <Footer>
        < ButtonSair />
      </Footer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  padding-right: 20px;
  align-items: flex-end;
  z-index: 2;
`;

const Header = styled.SafeAreaView`
  justify-content: center;
  padding: 10px;
  z-index: 1;
  flex: 1;
  background-color: brown;
`;

const Image = styled.View`
  align-items: center;
  justify-content: center;
`;

const ImageHeader = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const TextHeader = styled.Text`
  padding-top: 4%;
  font-size: 20px;
  color: #000;
`;

const Body = styled.View`
  flex: 2;
  align-items: center;
  background-color: blueviolet;
  padding: 2%;
`;

const ButtonNavigator = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  background-color: #050626;
  margin-bottom: 10px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
const ButtonNavigatorText = styled.Text`
  color: #fff;
  font-size: 25px;
`;

const Footer = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: flex-end;
  align-items: center;
`;


