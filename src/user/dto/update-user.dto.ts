import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserDto {
    @Field()
    readonly name: string;

    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field()
    readonly gender: string;
}