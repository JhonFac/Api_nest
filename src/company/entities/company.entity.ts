import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
} from 'typeorm';

@Entity()
export class Company {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: `Email` })
    @Column()
    email: string;

    @ApiProperty({ description: `Company`, nullable: true })
    @Column()
    company: string;

    @ApiProperty({ description: `nit` })
    @Column()
    nit: string;
}
