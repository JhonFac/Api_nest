import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

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
    @IsNumber()
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


// companies.dto.ts

export class CreateCompanyDto {
    @IsString()
    company: string;

    @IsString()
    email: string;

    @IsString()
    nit: string;
}

export class UpdateCompanyDto {

    @IsString()
    company?: string;

    @IsString()
    email?: string;

    @IsString()
    nit?: string;
}
