import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { InputUserDto } from './dto/input-user.dto';
import { IUser } from './interfaces/user.interface';
import { User } from './models/user.model';
import { UserModule } from './user.module';
import { UserService } from './user.service';

@Resolver(() => UserModule)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User])
    async getUsers(): Promise<IUser[]> {
        return this.userService.findAll();
    }

    @Query(() => User)
    async getUser(@Args('id') id: string): Promise<IUser> {
        return this.userService.findOne(id);
    }

    @Mutation(() => User)
    async createUser(@Args('input') input: InputUserDto): Promise<CreateUserDto> {
        return this.userService.create(input);
    }

    @Mutation(() => User)
    async updateUser(
        @Args('id') id: string,
        @Args('input') inputUserDto: InputUserDto,
    ): Promise<CreateUserDto> {
        return this.userService.update(id, inputUserDto);
    }

    @Mutation(() => Boolean)
    async deleteUser(@Args('id') id: string,): Promise<boolean> {
        return this.userService.delete(id);
    }
}
