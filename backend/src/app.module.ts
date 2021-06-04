import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as mongoosePaginate from 'mongoose-paginate-v2';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.aqvmm.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useFindAndModify: false,
        connectionFactory: (connection) => {
          mongoosePaginate.paginate.options = {
            limit: process.env.PAGINATION || 2,
            customLabels: {
              docs: 'data',
              totalDocs: 'total',
              totalPages: 'pages',
            },
          };
          connection.plugin(mongoosePaginate);

          return connection;
        },
      },
    ),
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
