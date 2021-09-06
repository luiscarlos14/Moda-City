import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from "../context/authentication";
import styled from 'styled-components/native';


export default function Button() {
    const { Sair } = useContext(AuthContext);

 return (
   <ButtonFooter onPress={()=> Sair()}><ButtonFooterText>SAIR</ButtonFooterText></ButtonFooter>
  );
}


export const ButtonFooter = styled.TouchableOpacity`
  align-items: flex-end;
  width: 90%;
  height: 60px;
  border-width: 1px;
  border-color: #050626;
  margin-bottom: 10px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin: 10%;
`;

const ButtonFooterText = styled.Text`
  color: #050626;
  font-size: 25px;
  font-weight: bold;
`;
