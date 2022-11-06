import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateUserDto) {
        const userAlreadyExists = await this.prisma.user.findFirst({
            where: {
                email: data.email,
            },
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = await this.prisma.user.create({
            data,
        });

        return user;
    }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findOne(id: string) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!userExists) {
            throw new Error("User does not exists");
        }

        return userExists;
    }

    async update(id: string, data: UpdateUserDto) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!userExists) {
            throw new Error("User does not exists!");
        }

        return await this.prisma.user.update({
            data,
            where: {
                id,
            },
        });
    }

    async delete(id: string) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!userExists) {
            throw new Error("User does not exists!");
        }

        return await this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
}
