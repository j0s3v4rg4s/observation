import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ValidationPipe } from './shared/pipe/validation.pipe';

async function bootstrap() {
  initFirebase();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

function initFirebase() {
  const service = {
    type: process.env.FIRE_TYPE,
    project_id: process.env.FIRE_PROJECT_ID,
    private_key_id: process.env.FIRE_PRIVATE_KEY_ID,
    private_key: process.env.FIRE_PRIVATE_KEY,
    client_email: process.env.FIRE_CLIENT_EMAIL,
    client_id: process.env.FIRE_CLIENT_ID,
    auth_uri: process.env.FIRE_AUTH_URI,
    token_uri: process.env.FIRE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIRE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIRE_CLIENT_X509_CERT_URL,
  };
  admin.initializeApp({
    credential: admin.credential.cert(service as any),
    databaseURL: 'https://observatory-azai-dev.firebaseio.com',
  });
}

bootstrap();
