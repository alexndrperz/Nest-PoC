import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}


  create(createProductDto: CreateProductDto) {
    const product: Product = new Product();
    product.productName= createProductDto.productName;
    product.price= createProductDto.price;
    return this.productRepo.save(createProductDto);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    return this.productRepo.findOneBy({id })
  }
  remove(id: number) {
    this.productRepo.delete(id)
  }
}
