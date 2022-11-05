import { User } from "@prisma/client";

export class UserEntity implements User {
    id: string;
    email: string;
    name: string;
    created_at: Date;
    updated_at: Date;
}
