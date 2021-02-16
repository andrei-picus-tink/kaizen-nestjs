import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
} from "@nestjs/common";
import jwt from "next-auth/jwt";
import { Reflector } from "@nestjs/core";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT secret missing");
}

const secret = process.env.JWT_SECRET;

const IS_PUBLIC_KEY = "isPublic";

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate = async (context: ExecutionContext): Promise<boolean> => {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest();

    try {
      const token = await jwt.getToken({ req, secret });
      return !!token;
    } catch (e) {
      return false;
    }
  };
}
