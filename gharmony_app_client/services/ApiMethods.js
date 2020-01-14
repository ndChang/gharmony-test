import api from "./ApiConfig";

export const registerAccount = async body => {
  try {
    const resp = await api.post("location", body);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
