import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateGroupDto {
    @Field(() => ID)
    readonly id?: string;

    @Field()
    readonly name: string;
}
