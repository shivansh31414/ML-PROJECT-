import client from "./client";

export const predict = async (features) => {
  const res = await client.post("/predict", features);
  return res.data;
};
