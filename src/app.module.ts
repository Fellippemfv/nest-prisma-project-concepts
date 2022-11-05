import { Module } from "@nestjs/common";

import { BookModule } from "./modules/book/book.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
    imports: [BookModule, UsersModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
