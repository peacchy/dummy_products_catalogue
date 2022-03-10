import { ResponseErrorDto } from "api/ResponseErrorDto";
import { buildQueryString } from "./buildQueryString";
import { ProductResponseDto } from "./dto/ProductResponseDto";
import { ProductsRequestDto } from "./dto/ProductsRequestDto";

export const getProducts = async (
  filters: ProductsRequestDto
): Promise<ProductResponseDto> => {
  const queryParams = buildQueryString(filters);

  return fetch(
    `https://join-tsh-api-staging.herokuapp.com/products${queryParams}`
  )
    .then((response) => response.json())
    .then((response) => {
      if (isError(response)) {
        const error = response as ResponseErrorDto;

        throw new Error(error.message);
      }

      return response;
    });
};

const isError = <T>(
  response: T | ResponseErrorDto
): response is ResponseErrorDto => {
  for (let [key, value] of Object.entries(response)) {
    if (key === "statusCode" && (value < 200 || value > 300)) {
      return true;
    }
  }

  return false;
};
