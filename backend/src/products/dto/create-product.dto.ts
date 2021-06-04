import { IsIn, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OriginType, originTypes } from '../entities/product.entity';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({ example: 'my product', description: 'product name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: '99.99',
    description: 'product price',
    type: 'number',
  })
  @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly price: number;

  @ApiProperty({
    example: 'usa',
    description: 'product origin',
    type: 'string',
    enum: originTypes,
  })
  @IsNotEmpty()
  @IsIn(originTypes)
  @IsString()
  readonly origin: OriginType;

  @ApiProperty({ type: 'file' })
  readonly picture: any;
}
