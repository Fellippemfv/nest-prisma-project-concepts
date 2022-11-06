import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from "@nestjs/common";

import { UsersService } from "./users.service";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { UserEntity } from "./entities/user.entity";

@Controller("users")
@ApiTags("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiCreatedResponse({ type: UserEntity })
    async create(@Body() data: CreateUserDto) {
        return this.usersService.create(data);
    }

    @Get()
    @ApiCreatedResponse({ type: UserEntity })
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(":id")
    @ApiCreatedResponse({ type: UserEntity })
    async findOne(@Param("id") id: string) {
        return this.usersService.findOne(id);
    }

    @ApiCreatedResponse({ type: UserEntity })
    @Put(":id")
    async update(@Param("id") id: string, @Body() data: UpdateUserDto) {
        return this.usersService.update(id, data);
    }

    @ApiCreatedResponse({ type: UserEntity })
    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.usersService.delete(id);
    }
}
