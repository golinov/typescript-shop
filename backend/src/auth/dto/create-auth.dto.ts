import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({ example: 'user@mail.com', description: 'email address' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '123456', description: 'password' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  readonly password: string;
}
