import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  });
  app.use(cookieParser());

  await app.listen(process.env.PORT || 3001);
}

bootstrap();
