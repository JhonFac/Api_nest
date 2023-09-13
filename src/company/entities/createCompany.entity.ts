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
export class CreateCompanyDto {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    email: string;

    @ApiProperty()
    company: string;

    @ApiProperty()
    nit: string;
}