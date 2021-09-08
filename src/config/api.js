import axios from 'axios';


export default axios.create({
 baseURL: 'http://192.168.1.17:3001'
  //baseURL: 'http://localhost:8080/'
});

export const TOKEN_KEY = "@modadacidade";
export const ID_PRODUCT ="@idproduto";
export const LOGGED = "@logged";
export const SERVER = "http://192.168.1.17:8080";
