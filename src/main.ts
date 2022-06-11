import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentationConfig = new DocumentBuilder()
    .setTitle('eCommerceRest')
    .setVersion('1.0')
    .build();

    const documentation = SwaggerModule.createDocument(app, documentationConfig);
    SwaggerModule.setup('api/', app, documentation);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
