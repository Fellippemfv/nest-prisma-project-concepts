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

import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { UserEntity } from "./entities/user.entity";

@Controller("users")
@ApiTags("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiOperation({
        summary: "Create a user",
    })
    @ApiCreatedResponse({ type: UserEntity })
    async create(@Body() data: CreateUserDto) {
        return this.usersService.create(data);
    }

    @Get()
    @ApiOperation({
        summary: "Show all users",
    })
    @ApiCreatedResponse({ type: UserEntity })
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(":id")
    @ApiOperation({
        summary: "Show only one user by id",
    })
    @ApiCreatedResponse({ type: UserEntity })
    async findOne(@Param("id") id: string) {
        return this.usersService.findOne(id);
    }

    @Put(":id")
    @ApiOperation({
        summary: "Update a user by id",
    })
    @ApiCreatedResponse({ type: UserEntity })
    async update(@Param("id") id: string, @Body() data: UpdateUserDto) {
        return this.usersService.update(id, data);
    }

    @Delete(":id")
    @ApiOperation({
        summary: "Delete a user by id",
    })
    @ApiCreatedResponse({ type: UserEntity })
    async remove(@Param("id") id: string) {
        return this.usersService.delete(id);
    }
}
