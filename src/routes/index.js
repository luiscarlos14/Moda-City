import React from "react";

import Seller from "./seller.routes";
import Client from "./client.routes";
import Auth from "./auth.routes";

export default function routes() {
  const authenticated = true;
  return authenticated ? user() : <Auth />;
}

function user() {
  const seller = false;
  return seller ? <Seller /> : <Client />;
}
