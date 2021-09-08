import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components/native";
import { SERVER, ID_PRODUCT } from '../config/api';
import { Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = (props) => {

    function filterDesc(title){
        if(title < 26){
            return title;
        }else{
        return `${title.substring(0, 24)}`}
    }

    function red(){

       // AsyncStorage.removeItem(ID_PRODUCT);

        props.redirect(props.id)


    }

 return (
        <Main>
            <TouchableOpacity onPress={red}>
                 <Container>
                 <Image style={{width:'100%', height: '100%'}} source={{ uri:  `${SERVER}/${props.photo}` }}/>

                </Container>
                <Body>
                    <Titulo>{props.title}</Titulo>
                    <Valor>{props.value}</Valor>
                </Body>
             </TouchableOpacity>
        </Main>
  );
}

export default Card;

const Main = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10%;
`;

const Container = styled.SafeAreaView`
    width: 180px;
    height: 250px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const Body = styled.SafeAreaView`
   align-items: center;
   justify-content: center;
   background-color: #656573;
   width: 100%;
   border-radius: 5px;
   padding-Top: 1%;
    padding-bottom: 1%;
    margin-bottom: 2%;
`;



const Titulo = styled.Text`
    font-size: 20px;
    color: #fff
`;

const Valor = styled.Text`
    font-size: 20px;
    color: #fff
`;

