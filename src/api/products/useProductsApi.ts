import { useFetch } from "../useFetch";
import { ProductResponseDto } from "./dto/ProductResponseDto";

export const useProductsApi = () => {
  const { httpGet } = useFetch();
  const baseUrl = "https://join-tsh-api-staging.herokuapp.com";

  const getProducts = async (): Promise<ProductResponseDto> => {
    return httpGet<ProductResponseDto>(`${baseUrl}/products`);
  };

  return {
    getProducts,
  };
};
