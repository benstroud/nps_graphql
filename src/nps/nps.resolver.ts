
import { Args, Query, Resolver } from '@nestjs/graphql';
import { NpsService } from './nps.service';
import { ParksResponse } from './nps.types';

@Resolver()
export class ParksResolver {
  constructor(private readonly npsService: NpsService) {}

  // Simple query to test the resolver
  @Query(() => String)
  hello() {
    return 'Hello from NPS GraphQL adapter API';
  }

  // Query to fetch parks data from the NPS API
  @Query(() => ParksResponse)
  async getParks(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
  ): Promise<ParksResponse> {
    // Call the service method to fetch parks data
    return this.npsService.getParks(parkCode, stateCode, limit);
  }
}
