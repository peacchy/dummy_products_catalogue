import { UserDto } from "./UserDto";

export interface LoginResponseDto {
  user: UserDto;
  expiresIn: string;
  access_token: string;
}
