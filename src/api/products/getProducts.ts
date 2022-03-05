import { buildQueryString, Filters } from "./buildQueryString";
import { ProductResponseDto } from "./dto/ProductResponseDto";

export const getProducts = async (
  filters: Filters
): Promise<ProductResponseDto> => {
  const queryParams = buildQueryString(filters);
  return fetch(
    `https://join-tsh-api-staging.herokuapp.com/products${queryParams}`
  ).then((response) => response.json());
};
