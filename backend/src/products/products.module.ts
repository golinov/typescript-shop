import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { AuthModule } from '../auth/auth.module';
import { FileService } from '../file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, FileService],
})
export class ProductsModule {}
