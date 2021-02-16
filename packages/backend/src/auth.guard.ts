import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import jwt from "next-auth/jwt";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT secret missing");
}

const secret = process.env.JWT_SECRET;

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate = async (context: ExecutionContext): Promise<boolean> => {
    const req = context.switchToHttp().getRequest();

    try {
      const token = await jwt.getToken({ req, secret });
      return !!token;
    } catch (e) {
      return false;
    }
  };
}
