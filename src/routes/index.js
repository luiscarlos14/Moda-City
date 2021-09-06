import React,  { useContext } from "react";

import Seller from "./seller.routes";
import Client from "./client.routes";
import Auth from "./auth.routes";

import AuthContext from "../context/authentication";


export default function routes() {
  const { authenticated } = useContext(AuthContext);
  console.log(authenticated)

  return authenticated ? user() : <Auth />;
}

function user() {
  const seller = false;
  return seller ? <Seller /> : <Client />;
}
