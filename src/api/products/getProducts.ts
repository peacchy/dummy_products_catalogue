import { ProductResponseDto } from "./dto/ProductResponseDto";

export const getProducts = async (): Promise<ProductResponseDto> => {
  return fetch(`https://join-tsh-api-staging.herokuapp.com/products`).then(
    (response) => response.json()
  );
};
