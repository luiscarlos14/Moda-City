import React, { useContext } from "react";

import Seller from "./seller.routes";
import Client from "./client.routes";
import Auth from "./auth.routes";

import AuthContext from "../context/authentication";

export default function routes() {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? user() : <Auth />;
}

function user() {
  //const { seller } = useContext(AuthContext);
 const seller = true;
  return seller ? <Seller /> : <Client />;
}
