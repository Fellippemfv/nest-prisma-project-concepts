import { Module } from "@nestjs/common";

import { UsersModule } from "./modules/users/users.module";
import { BooksModule } from "./modules/books/books.module";

@Module({
    imports: [UsersModule, BooksModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
