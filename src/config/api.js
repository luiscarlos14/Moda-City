import axios from 'axios';


export default axios.create({
 baseURL: 'http://192.168.1.17:3001'
  //baseURL: 'http://localhost:8080/'
  //baseURL: 'http://10.0.0.104:3001/'
});

export const TOKEN_KEY = "@modadacidade";
export const ID_PRODUCT ="@idproduto";
export const ID_PRODUCT_EDIT ="@idproduto";
export const LOGGED = "@logged";
export const SERVER = "http://192.168.1.17:3001";
//export const SERVER = "http://10.0.0.104:3001/";
export const SELLER = "@seller";
export const ADMIN = "@admin";
export const CITY = "@city";
export const ID_USER = "@iduser";
export const NAME_USER = "@nameuser";
export const ID_SELLER = "@idseller";
export const ID_SELLER_CLIENT = "@idsellerclient";

