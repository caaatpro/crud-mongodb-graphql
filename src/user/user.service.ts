import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InputUserDto } from './dto/input-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

    async create(createUserDto: InputUserDto): Promise<CreateUserDto> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().populate('friends', 'groups').exec();
    }

    async findOne(id: string): Promise<IUser> {
        return await this.userModel.findOne({ _id: id }).populate('friends', 'groups').exec();
    }

    async delete(id: string): Promise<boolean> {
        await this.userModel.deleteOne({
            _id: id
        }).exec();

        return true;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        return await this.userModel.updateOne({
            _id: id
        }, updateUserDto, { new: true }).exec();
    }
}
