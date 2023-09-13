import { ConflictException, Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './entities/createCompany.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly userRepository: Repository<Company>,
    ) { }

    async findOne(id: number) {
        const user = await this.userRepository.findOne({
            where: { id },
        });

        if (!user) throw new ConflictException(`User do not exist (USFO-001)`);
        return user;
    }

    async findAll() {
        const user = await this.userRepository.find();

        if (user.length === 0)
            throw new ConflictException(`No users registered (USFA-001)`);
        return user;
    }

    async create(creaCompany: CreateCompanyDto) {
        console.log(creaCompany)

        // const { email, company, nit } = creaCompany;

        // const filterCompany = await this.userRepository.findOne({
        //     where: { nit },
        // });
        // if (filterCompany) throw new ConflictException(`User not available (USC-001)`);
        return { id: (await this.userRepository.save(creaCompany)).id };
    }
}
