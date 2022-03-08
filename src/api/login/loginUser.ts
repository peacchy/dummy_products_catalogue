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
      console.log(response);
      if (response.statusCode >= 200 && response.statusCode < 300) {
        return response;
      }

      const error = response as ResponseErrorDto;

      throw new Error(error.message);
    });
};
