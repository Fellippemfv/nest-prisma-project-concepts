import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateBookDto) {
        const bookAlreadyExists = await this.prisma.book.findFirst({
            where: {
                bar_code: data.bar_code,
            },
        });

        if (bookAlreadyExists) {
            throw new Error("Book already exists");
        }

        const book = await this.prisma.book.create({
            data,
        });

        return book;
    }

    findAll() {
        return this.prisma.book.findMany();
    }

    async findOne(id: string) {
        const bookExists = await this.prisma.book.findUnique({
            where: {
                id,
            },
        });

        if (!bookExists) {
            throw new Error("Book does not exists");
        }

        return bookExists;
    }

    async update(id: string, data: UpdateBookDto) {
        const bookExists = await this.prisma.book.findUnique({
            where: {
                id,
            },
        });

        if (!bookExists) {
            throw new Error("Book does not exists!");
        }

        return await this.prisma.book.update({
            data,
            where: {
                id,
            },
        });
    }

    async delete(id: string) {
        const bookExists = await this.prisma.book.findUnique({
            where: {
                id,
            },
        });

        if (!bookExists) {
            throw new Error("Book does not exists!");
        }

        return await this.prisma.book.delete({
            where: {
                id,
            },
        });
    }
}
