import { IsIn, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  @IsIn(['asia', 'europe', 'usa'])
  @IsString()
  readonly origin: string;
}
