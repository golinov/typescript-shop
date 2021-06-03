import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(`mongodb://${process.env.DATABASE_HOST}/`, {
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASSWORD,
      useCreateIndex: true,
      useFindAndModify: false,
      dbName: process.env.DATABASE_NAME,
    }),
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
