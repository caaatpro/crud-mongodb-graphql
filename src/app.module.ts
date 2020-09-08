import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { GroupModule } from './group/group.module';
import { UserModule } from './user/user.module';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    UserModule,
    GroupModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION_STRING,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
