import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SELLER  } from "../config/api";

import Seller from "./seller.routes";
import Client from "./client.routes";
import Auth from "./auth.routes";

import AuthContext from "../context/authentication";

export default function routes() {




  const { authenticated } = useContext(AuthContext);
  return authenticated ? user() : <Auth />;
}

function user() {
  
  const [sellerAsync, setSellerAsync] = useState(
    AsyncStorage.getItem(SELLER)
      .then((value) => {
        setSellerAsync(value);
      })
      .done()
  );

  const { seller } = useContext(AuthContext);
 //const seller = true;
  return (seller || sellerAsync == '1') ? <Seller /> : <Client />;
}
