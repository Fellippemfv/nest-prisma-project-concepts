import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsOptional()
    @ApiProperty()
    id?: string;

    @IsString()
    @MinLength(1)
    @MaxLength(450)
    @ApiProperty()
    title: string;

    @IsString()
    @MinLength(1)
    @MaxLength(900)
    @ApiProperty()
    description: string;

    @IsString()
    @MinLength(1)
    @ApiProperty()
    bar_code: string;
}
