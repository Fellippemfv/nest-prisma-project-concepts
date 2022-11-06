import { ApiProperty } from "@nestjs/swagger";
import { Book } from "@prisma/client";

export class BookEntity implements Book {
    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    bar_code: string;
}
