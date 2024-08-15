import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, ApiParam} from '@nestjs/swagger';
import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('TO-DO API')
    .setDescription('First Api for a Standard To-do Task! with NestJs')
    .setVersion('1.0')
    .addTag('todos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(morgan('dev'));
const port = 4000
  await app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
  });
}
bootstrap();
