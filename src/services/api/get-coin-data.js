import { apiCall } from "../common";

export const getCoinData = async (coinSymbol , vsCurrency) => {
    try {
      const response = await apiCall.get(`price?ids=${coinSymbol}&vs_currencies=${vsCurrency}`);

      return response;
    } catch (error) {
      return ;
    }
  };