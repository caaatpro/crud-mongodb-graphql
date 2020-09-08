import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGroupDto } from './dto/create-group.dto';
import { InputGroupDto } from './dto/input-group.dto';
import { GroupService } from './goup.service';
import { GroupModule } from './group.module';
import { IGroup } from './interfaces/group.interface';
import { Group } from './models/group.model';

@Resolver(() => GroupModule)
export class GroupResolver {
    constructor(private readonly groupService: GroupService) {}

    @Query(() => [Group])
    async getGroups(): Promise<IGroup[]> {
        return this.groupService.findAll();
    }

    @Query(() => Group)
    async getGroup(@Args('id') id: string): Promise<IGroup> {
        return this.groupService.findOne(id);
    }

    @Mutation(() => Group)
    async createGroup(@Args('input') input: InputGroupDto): Promise<CreateGroupDto> {
        return this.groupService.create(input);
    }

    @Mutation(() => Group)
    async updateGroup(
        @Args('id') id: string,
        @Args('input') inputGroupDto: InputGroupDto,
    ): Promise<CreateGroupDto> {
        return this.groupService.update(id, inputGroupDto);
    }

    @Mutation(() => Boolean)
    async deleteGroup(@Args('id') id: string,): Promise<boolean> {
        return this.groupService.delete(id);
    }
}
