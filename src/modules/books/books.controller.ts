import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseFilters,
} from "@nestjs/common";

import { BooksService } from "./books.service";

import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { BookEntity } from "./entities/book.entity";
import { PrismaClientExceptionFilter } from "src/prisma-client-exception/prisma-client-exception.filter";

@Controller("books")
@ApiTags("books")
@UseFilters(PrismaClientExceptionFilter)
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    @ApiCreatedResponse({ type: BookEntity })
    async create(@Body() data: CreateBookDto) {
        return this.booksService.create(data);
    }

    @Get()
    @ApiCreatedResponse({ type: BookEntity })
    async findAll() {
        return this.booksService.findAll();
    }

    @Get(":id")
    @ApiCreatedResponse({ type: BookEntity })
    async findOne(@Param("id") id: string) {
        return this.booksService.findOne(id);
    }

    @Put(":id")
    @ApiCreatedResponse({ type: BookEntity })
    async update(@Param("id") id: string, @Body() data: UpdateBookDto) {
        return this.booksService.update(id, data);
    }

    @Delete(":id")
    @ApiCreatedResponse({ type: BookEntity })
    async delete(@Param("id") id: string) {
        return this.booksService.delete(id);
    }
}
