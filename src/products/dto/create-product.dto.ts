import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    productName: string;
  
    @IsNotEmpty()
    @IsDecimal()
    price: number;
  }