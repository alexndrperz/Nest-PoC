import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;
     
    @Column({type:'varchar', length:50})
    productName:string;

    @Column({type:'decimal'})
    price:number;

    @Column({type:'varchar', length:50, nullable:true })
    videoUrl:string;

}