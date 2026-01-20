import client from "./client";

export const signup = async (username, password) => {
  const res = await client.post("/signup", { username, password });
  localStorage.setItem("token", res.data.access_token);
  return res.data;
};

export const login = async (username, password) => {
  const res = await client.post("/login", { username, password });
  localStorage.setItem("token", res.data.access_token);
  return res.data;
};
