import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Group {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}
