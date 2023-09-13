import { ConflictException, Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Company, UpdateCompanyDto, CreateCompanyDto } from './entities/company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>,
    ) { }

    async findOne(id: number) {
        const user = await this.companyRepository.findOne({
            where: { id },
        });

        if (!user) throw new ConflictException(`User do not exist (USFO-001)`);
        return user;
    }

    async findAll() {
        const user = await this.companyRepository.find();

        if (user.length === 0)
            throw new ConflictException(`No users registered (USFA-001)`);
        return user;
    }

    async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
        const company = this.companyRepository.create(createCompanyDto);
        return this.companyRepository.save(company);
    }

    async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
        await this.companyRepository.update(id, updateCompanyDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.companyRepository.delete(id);
    }




}






// async findOne(id: number) {
//     const user = await this.companyRepository.findOne({
//         where: { id },
//     });

//     if (!user) throw new ConflictException(`User do not exist (USFO-001)`);
//     return user;
// }

// async findAll() {
//     const user = await this.companyRepository.find();

//     if (user.length === 0)
//         throw new ConflictException(`No users registered (USFA-001)`);
//     return user;
// }

// // async create(creaCompany: CreateCompanyDto) {
// //     console.log(creaCompany)

// //     // const { email, company, nit } = creaCompany;

// //     // const filterCompany = await this.userRepository.findOne({
// //     //     where: { nit },
// //     // });
// //     // if (filterCompany) throw new ConflictException(`User not available (USC-001)`);
// //     return { id: (await this.userRepository.save(creaCompany)).id };
// // }


// async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
//     const company = this.companyRepository.create(createCompanyDto);
//     return this.companyRepository.save(company);
// }

// async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
//     await this.companyRepository.update(id, updateCompanyDto);
//     return this.companyRepository.findOne(id);
// }

// async remove(id: number): Promise<void> {
//     await this.companyRepository.delete(id);
// }