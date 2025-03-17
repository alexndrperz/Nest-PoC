import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entities/product.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository} from 'typeorm';

@Injectable()
export class UploadVidService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}

  async uploadVideo(productId: number, videoUrl: string): Promise<Product> {
    const product = await this.productRepo.findOneBy({ id:productId });
    if (!product) {
      throw new NotFoundException(`Producto con ID ${productId} no encontrado`);
    }
    product.videoUrl = videoUrl;
    return this.productRepo.save(product);
  }
}