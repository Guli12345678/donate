import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3030;
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle("Donation Project")
      .setDescription("This project involves NestsJS RESTFULL API")
      .setVersion("1.0")
      .addTag("Nestjs, swagger, validation, admin-role, auth")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );    await app.listen(PORT, () => {
      console.log(`Server started at 🐷: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}
start();
