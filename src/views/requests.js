import api from "../config/api";

export async function Cadastro(
  admin,
  seller,
  firstName,
  lastName,
  email,
  password,
  state,
  city,
  photo,
  refreshPage
) {
  var user = new FormData();

  user.append("admin", admin);
  user.append("seller", seller);
  user.append("firstName", firstName);
  user.append("lastName", lastName);
  user.append("email", email);
  user.append("password", password);
  user.append("state", state);
  user.append("city", city);
  user.append("photo", photo);

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  await api.post("/users", user, config).then(() => {
    refreshPage(200, "adicionado");
  });
}
