import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api, {
  ID_PRODUCT,
  TOKEN_KEY,
  ID_USER,
  SERVER,
  NAME_USER,
} from "../config/api";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";

export default function User({ navigation }) {
  const [user, setUser] = useState([]);

  const [name, setName] = useState(
    AsyncStorage.getItem(NAME_USER)
      .then((value) => {
        setName(value);
      })
      .done()
  );

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

  useMemo(() => {
    getUser()
      .then((result) => {
        setUser(result);
      })
      .catch();
  }, [token]);

  async function getUser() {
    const res = (
      await api.get(`/users/${userID}`, {
        headers: { Authorization: `token ${token}` },
      })
    ).data.response;
    return res;
  }

  console.log(user)

  return (
    <Image>
      {user.map((row) => (
        <ImageHeader key={row.id} source={{ uri: `${SERVER}/${row.photo}` }} />
      ))}
      <Text style={{ fontSize: 20, padding: "4%" }}>{name}</Text>
    </Image>
  );
}

const Image = styled.View`
  align-items: center;
  justify-content: center;
`;

const ImageHeader = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
