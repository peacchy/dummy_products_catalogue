import { ResponseErrorDto } from "api/ResponseErrorDto";
import { LoginResponseDto } from "./dto/LoginResponseDto";

export interface Credentials {
  username: string;
  password: string;
}

export const loginUser = async (
  credentials: Credentials
): Promise<LoginResponseDto> => {
  return fetch("https://join-tsh-api-staging.herokuapp.com/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
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
