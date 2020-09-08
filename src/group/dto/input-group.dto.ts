import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class InputGroupDto {
    @Field()
    readonly name: string;
}