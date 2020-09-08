import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateGroupDto {
    @Field()
    readonly name: string;
}