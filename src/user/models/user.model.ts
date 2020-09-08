import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Group } from 'src/group/models/group.model';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  gender: string;

  @Field( type => [User])
  friends: User[]

  @Field( type => [Group])
  groups: Group[]
}
