// utils/auth.ts
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number; // expiration time in seconds (UNIX timestamp)
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: JwtPayload = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // in seconds
    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Invalid token:", error);
    return true; // treat invalid as expired
  }
};
