import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Schema } from "mongoose";

@ObjectType()
export class CreateUserDto {
    @Field(() => ID)
    readonly id?: string;

    @Field()
    readonly name: string;

    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field()
    readonly gender: string;

    readonly groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }];

    readonly friends: [{ type: Schema.Types.ObjectId, ref: 'User' }];
}
