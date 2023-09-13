import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Person } from './person.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column()
    quantity: number;

    @ManyToMany(() => Person, (person) => person.products)
    owners: Person[];
}
