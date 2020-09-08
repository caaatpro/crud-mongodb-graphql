import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class InputUserDto {
    @Field()
    readonly name: string;

    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field()
    readonly gender: string;

    @Field(type => [String])
    readonly groups: string[];

    @Field(type => [String])
    readonly friends: string[];
}