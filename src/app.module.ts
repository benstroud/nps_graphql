import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { NpsModule } from './nps/nps.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // Using Apollo Server
      driver: ApolloDriver,
      // GraphQL schema file will be generated here
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // Debugging and playground
      debug: true,
      playground: true,
    }),
    NpsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
