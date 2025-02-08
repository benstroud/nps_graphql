import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is the NPS GraphQL adapter API. Visit /graphql to explore the API.';
  }
}
