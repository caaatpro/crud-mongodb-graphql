import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupService } from './goup.service';
import { GroupResolver } from './group.resolver';
import { GroupSchema } from './schemas/group.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }])],
  providers: [GroupResolver, GroupService],
  controllers: [],
})
export class GroupModule {}
