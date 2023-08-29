import axios from "axios";

const BASE_URL = "https://viacep.com.br/ws/";

export const fetchCEP = async (cep: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${cep}/json`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar informações de CEP:", error);

    return null;
  }
};
