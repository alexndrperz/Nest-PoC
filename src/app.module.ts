import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'nestpassword',
      username: 'nestuser',
      entities: [Product],
      database: 'nestdb',
      synchronize: true,
      logging: true,
    }),
    ProductsModule
  ]
})
export class AppModule { }
