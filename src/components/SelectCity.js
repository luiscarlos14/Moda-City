import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Cidades from "../city";

const SelectCity = ({ options, onChangeSelect, text }) => {

  const [txt, setTxt] = useState(text);
  const [modalVisible, setModalVisible] = useState(false);

  const bd = Cidades;

  return (
    <>
      <Selector onPress={() => setModalVisible(true)}>
        <TextSelector numberOfLines={1}>{txt}</TextSelector>

        <MaterialCommunityIcons name="chevron-down" color="black" size={50} />
      </Selector>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView>
          <HeaderModal>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => setModalVisible(false)}>
              <MaterialCommunityIcons
                name="chevron-left"
                color="blue"
                size={50}
              />
              <Text style={{fontSize: 25}}>Voltar</Text>
            </TouchableOpacity>
          </HeaderModal>
          <ScrollView>
            <BodyModal>
              {bd.map((row) => (
                <ModalBodyButton key={row.id} onPress={() => alert(row.id)}>
                  <ModalBodyText>{row.city}</ModalBodyText>
                </ModalBodyButton>
              ))}
            </BodyModal>
          </ScrollView>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <HeaderModalText>Cancelar</HeaderModalText>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Selector = styled.TouchableOpacity`

  height: 50px;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TextSelector = styled.Text`
  color: black;
  font-size: 18px;
`;

const HeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
`;
const BodyModal = styled.View`
  margin-bottom: 20%;
`;

const HeaderModalText = styled.Text`
  font-size: 30px;
`;

const ModalBodyButton = styled.TouchableOpacity`
  background-color: #050626;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ModalBodyText = styled.Text`
  font-size: 25px;
  color: #fff;
`;

export default SelectCity;
