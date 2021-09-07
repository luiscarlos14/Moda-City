import api from "../../../config/api";

export async function getProdutos() {
  const res = (await api.get("/products")).data.response;
  return res;
}
