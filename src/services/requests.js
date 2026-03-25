import api from "./api";

export const registerUser = (data) => {
  return api.post("/users", data);
};