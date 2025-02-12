import { Args, Query, Resolver } from '@nestjs/graphql';
import { NpsService } from './nps.service';
import {
  ActivityParkResponse,
  ActivityResponse,
  AlertResponse,
  ParksResponse,
  AmenitiesParksPlacesResponse,
  ArticleResponse,
  CampgroundResponse,
  EventResponse,
  AmenitiesParksVisitorCentersResponse,
  FeesPassesResponse,
  LessonPlanResponse,
  MapdataParkboundaryResponse,
  MultimediaAudioResponse,
  MultimediaGalleriesResponse,
} from './nps.types';

@Resolver()
export class NpsResolver {
  constructor(private readonly npsService: NpsService) {}

  // Simple query to test the resolver
  @Query(() => String)
  hello() {
    return 'Hello from NPS GraphQL adapter API';
  }

  @Query(() => ActivityResponse)
  async getActivities(
    @Args('id', { nullable: true }) id?: string,
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('sort', { nullable: 'itemsAndList', type: () => [String] })
    sort?: string[],
  ): Promise<ActivityResponse> {
    return this.npsService.getActivities(id, q, limit, start, sort);
  }

  @Query(() => ActivityParkResponse)
  async getActivityParks(
    @Args('id', { nullable: true }) id?: string,
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('sort', { nullable: 'itemsAndList', type: () => [String] })
    sort?: string[],
  ): Promise<ActivityParkResponse> {
    return this.npsService.getActivityParks(id, q, limit, start, sort);
  }

  @Query(() => AlertResponse)
  async getAlerts(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<AlertResponse> {
    return this.npsService.getAlerts(parkCode, stateCode, limit, start, q);
  }

  // Query to fetch parks data from the NPS API
  @Query(() => ParksResponse)
  async getParks(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('sort', { nullable: 'itemsAndList', type: () => [String] })
    sort?: string[],
  ): Promise<ParksResponse> {
    // Call the service method to fetch parks data
    return this.npsService.getParks(parkCode, stateCode, limit, start, q, sort);
  }

  @Query(() => AmenitiesParksPlacesResponse)
  async getAmenitiesParkPlaces(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('id', { nullable: 'itemsAndList', type: () => [String] })
    id?: string[],
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('sort', { nullable: 'itemsAndList', type: () => [String] })
    sort?: string[],
  ): Promise<AmenitiesParksPlacesResponse> {
    return this.npsService.getAmenitiesParkPlaces(
      parkCode,
      id,
      q,
      limit,
      start,
      sort,
    );
  }

  @Query(() => AmenitiesParksVisitorCentersResponse)
  async getAmenitiesParkVisitorsCenters(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('id', { nullable: 'itemsAndList', type: () => [String] })
    id?: string[],
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('sort', { nullable: 'itemsAndList', type: () => [String] })
    sort?: string[],
  ): Promise<AmenitiesParksVisitorCentersResponse> {
    return this.npsService.getAmenitiesParkVisitorsCenters(
      parkCode,
      id,
      q,
      limit,
      start,
      sort,
    );
  }

  @Query(() => ArticleResponse)
  async getArticles(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<ArticleResponse> {
    return this.npsService.getArticles(parkCode, stateCode, limit, start, q);
  }

  @Query(() => CampgroundResponse)
  async getCampgrounds(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('sort', { nullable: 'itemsAndList', type: () => [String] })
    sort?: string[],
  ): Promise<CampgroundResponse> {
    return this.npsService.getCampgrounds(
      parkCode,
      stateCode,
      limit,
      start,
      q,
      sort,
    );
  }

  @Query(() => EventResponse)
  async getEvents(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('organization', { nullable: true }) organization?: string,
    @Args('subject', { nullable: true }) subject?: string,
    @Args('portal', { nullable: true }) portal?: string,
    @Args('tagsAll', { nullable: true }) tagsAll?: string,
    @Args('tagsOne', { nullable: true }) tagsOne?: string,
    @Args('tagsNone', { nullable: true }) tagsNone?: string,
    @Args('dateStart', { nullable: true }) dateStart?: string,
    @Args('dateEnd', { nullable: true }) dateEnd?: string,
    @Args('eventType', { nullable: true }) eventType?: string,
    @Args('id', { nullable: true }) id?: string,
    @Args('q', { nullable: true }) q?: string,
    @Args('pageSize', { nullable: true }) pageSize?: number,
    @Args('pageNumber', { nullable: true }) pageNumber?: number,
    @Args('expandRecurring', { nullable: true }) expandRecurring?: boolean,
  ): Promise<EventResponse> {
    return this.npsService.getEvents(
      parkCode,
      organization,
      subject,
      portal,
      tagsAll,
      tagsOne,
      tagsNone,
      dateStart,
      dateEnd,
      eventType,
      id,
      q,
      pageSize,
      pageNumber,
      expandRecurring,
    );
  }

  @Query(() => FeesPassesResponse)
  async getFeesPasses(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('start', { nullable: true }) start?: number,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('sort', { nullable: true }) sort?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
  ): Promise<FeesPassesResponse> {
    return this.npsService.getFeesPasses(
      parkCode,
      start,
      limit,
      q,
      sort,
      stateCode,
    );
  }

  @Query(() => LessonPlanResponse)
  async getLessonPlans(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('sort', { nullable: 'itemsAndList', type: () => [String] })
    sort?: string[],
  ): Promise<LessonPlanResponse> {
    return this.npsService.getLessonPlans(
      parkCode,
      stateCode,
      limit,
      start,
      q,
      sort,
    );
  }

  @Query(() => MapdataParkboundaryResponse)
  async getMapdataParkboundaries(
    @Args('sitecode', { nullable: false }) sitecode: string,
  ): Promise<MapdataParkboundaryResponse> {
    return this.npsService.getMapdataParkboundaries(sitecode);
  }

  @Query(() => MultimediaAudioResponse)
  async getMultimediaAudios(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<MultimediaAudioResponse> {
    return this.npsService.getMultimediaAudios(
      parkCode,
      stateCode,
      limit,
      start,
      q,
    );
  }

  @Query(() => MultimediaGalleriesResponse)
  async getMultimediaGalleries(
    @Args('parkCode', { nullable: true }) parkCode?: string,
    @Args('stateCode', { nullable: true }) stateCode?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('start', { nullable: true }) start?: number,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<MultimediaGalleriesResponse> {
    return this.npsService.getMultimediaGalleries(
      parkCode,
      stateCode,
      limit,
      start,
      q,
    );
  }
}
