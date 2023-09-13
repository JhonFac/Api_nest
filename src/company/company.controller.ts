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
export class Controller {
    constructor(
        private readonly Service: CompanyService,
        private readonly database: Database,
    ) { }
    @Get(':id')
    @ApiOperation({ summary: `Find comapany` })
    findOne(@Param('id') id: number) {
        return this.Service.findOne(id);
    }

    @Get()
    @ApiOperation({ summary: `Find all comapanys` })
    findAll() {
        return this.Service.findAll();
    }

    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.Service.create(createCompanyDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.Service.update(id, updateCompanyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.Service.remove(id);
    }
}
