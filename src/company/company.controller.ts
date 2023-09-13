import { Company, UpdateCompanyDto, CreateCompanyDto } from './entities/company.entity';
import {
    Controller,
    Get,
    Post,
    Put,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { IsPublic } from '../auth/decorators/public.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags(`Company`)
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Get(':id')
    @ApiOperation({ summary: `Find comapany` })
    findOne(@Param('id') id: number) {
        return this.companyService.findOne(id);
    }

    @Get()
    @ApiOperation({ summary: `Find all comapanys` })
    findAll() {
        return this.companyService.findAll();
    }

    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companyService.create(createCompanyDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.companyService.update(id, updateCompanyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.companyService.remove(id);
    }
}
