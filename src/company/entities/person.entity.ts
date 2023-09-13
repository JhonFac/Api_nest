import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Company } from './company.entity';
import { Product } from './product.entity';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    cell: string;

    @Column()
    city: string;

    @ManyToOne(() => Company, (company) => company.people)
    company: Company;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}
