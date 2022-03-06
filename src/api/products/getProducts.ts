import { buildQueryString } from "./buildQueryString";
import { ProductResponseDto } from "./dto/ProductResponseDto";
import { ProductsRequestDto } from "./dto/ProductsRequestDto";

export const getProducts = async (
  filters: ProductsRequestDto
): Promise<ProductResponseDto> => {
  const queryParams = buildQueryString(filters);

  return fetch(
    `https://join-tsh-api-staging.herokuapp.com/products${queryParams}`
  ).then((response) => response.json());
};
