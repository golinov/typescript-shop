import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginateModel, PaginateResult } from 'mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { FileService } from '../file/file.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: PaginateModel<ProductDocument>,
    private fileService: FileService,
  ) {}

  async create(createProductDto: CreateProductDto, picture): Promise<Product> {
    const picturePath = await this.fileService.createFile(picture);
    return this.productModel.create({
      ...createProductDto,
      picture: picturePath,
    });
  }

  async findAll(page = 1): Promise<PaginateResult<ProductDocument>> {
    return this.productModel.paginate({}, { page });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
