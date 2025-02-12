import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import {
  ActivityParkResponse,
  ActivityResponse,
  AlertResponse,
  AmenitiesParksPlacesResponse,
  AmenitiesParksVisitorCentersResponse,
  AmenitiesResponse,
  ArticleResponse,
  CampgroundResponse,
  EventResponse,
  FeesPassesResponse,
  LessonPlanResponse,
  MapdataParkboundaryResponse,
  MultimediaAudioResponse,
  MultimediaGalleriesResponse,
  ParksResponse,
} from './nps.types';

const HEADERS = {
  'X-Api-Key': process.env.NPS_API_KEY,
} as RawAxiosRequestHeaders;

@Injectable()
export class NpsService {
  private readonly BASE_URL = 'https://developer.nps.gov/api/v1';

  async getActivities(
    id?: string,
    q?: string,
    limit: number = 50,
    start: number = 0,
    sort: string[] = ['name'],
  ): Promise<ActivityResponse> {
    try {
      const response: AxiosResponse<ActivityResponse> = await axios.get(
        `${this.BASE_URL}/activities`,
        {
          headers: HEADERS,
          params: { id, q, limit, start, sort },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getActivityParks(
    id?: string,
    q?: string,
    limit: number = 50,
    start: number = 0,
    sort: string[] = ['name'],
  ): Promise<ActivityParkResponse> {
    try {
      const response: AxiosResponse<ActivityParkResponse> = await axios.get(
        `${this.BASE_URL}/activities/parks`,
        {
          headers: HEADERS,
          params: { id, q, limit, start, sort },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getAlerts(
    parkCode?: string,
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
  ): Promise<AlertResponse> {
    try {
      const response: AxiosResponse<AlertResponse> = await axios.get(
        `${this.BASE_URL}/alerts`,
        {
          headers: HEADERS,
          params: { parkCode, stateCode, limit, start, q },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getAmenities(
    id?: string[],
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
  ): Promise<AmenitiesResponse> {
    try {
      const response: AxiosResponse<AmenitiesResponse> = await axios.get(
        `${this.BASE_URL}/amenities`,
        {
          headers: HEADERS,
          params: { id, stateCode, limit, start, q },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getAmenitiesParkPlaces(
    parkCode?: string,
    id?: string[],
    q?: string,
    limit: number = 50,
    start: number = 0,
    sort?: string[],
  ) {
    try {
      const response: AxiosResponse<AmenitiesParksPlacesResponse> =
        await axios.get(`${this.BASE_URL}/amenities/parksplaces`, {
          headers: HEADERS,
          params: { parkCode, id, q, limit, start, sort },
        });

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getAmenitiesParkVisitorsCenters(
    parkCode?: string,
    id?: string[],
    q?: string,
    limit: number = 50,
    start: number = 0,
    sort?: string[],
  ): Promise<AmenitiesParksVisitorCentersResponse> {
    try {
      const response: AxiosResponse<AmenitiesParksVisitorCentersResponse> =
        await axios.get(`${this.BASE_URL}/amenities/parksvisitorcenters`, {
          headers: HEADERS,
          params: { parkCode, id, q, limit, start, sort },
        });

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getArticles(
    parkCode?: string,
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
  ): Promise<ArticleResponse> {
    try {
      const response: AxiosResponse<ArticleResponse> = await axios.get(
        `${this.BASE_URL}/articles`,
        {
          headers: HEADERS,
          params: { parkCode, stateCode, limit, start, q },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getCampgrounds(
    parkCode?: string,
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
    sort?: string[],
  ): Promise<CampgroundResponse> {
    try {
      const response: AxiosResponse<CampgroundResponse> = await axios.get(
        `${this.BASE_URL}/campgrounds`,
        {
          headers: HEADERS,
          params: { parkCode, stateCode, limit, start, q, sort },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getEvents(
    parkCode?: string,
    organization?: string,
    subject?: string,
    portal?: string,
    tagsAll?: string,
    tagsOne?: string,
    tagsNone?: string,
    dateStart?: string,
    dateEnd?: string,
    eventType?: string,
    id?: string,
    q?: string,
    pageSize: number = 10,
    pageNumber: number = 1,
    expandRecurring: boolean = false,
  ): Promise<EventResponse> {
    try {
      const response: AxiosResponse<EventResponse> = await axios.get(
        `${this.BASE_URL}/events`,
        {
          headers: HEADERS,
          params: {
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
          },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getFeesPasses(
    parkCode?: string,
    start: number = 0,
    limit: number = 50,
    q?: string,
    sort?: string,
    stateCode?: string,
  ): Promise<FeesPassesResponse> {
    try {
      const response: AxiosResponse<FeesPassesResponse> = await axios.get(
        `${this.BASE_URL}/feespasses`,
        {
          headers: HEADERS,
          params: { parkCode, start, limit, q, sort, stateCode },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getLessonPlans(
    parkCode?: string,
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
    sort: string[] = ['title'],
  ): Promise<LessonPlanResponse> {
    try {
      const response: AxiosResponse<LessonPlanResponse> = await axios.get(
        `${this.BASE_URL}/lessonplans`,
        {
          headers: HEADERS,
          params: { parkCode, stateCode, limit, start, q, sort },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getMapdataParkboundaries(
    sitecode: string,
  ): Promise<MapdataParkboundaryResponse> {
    try {
      const response: AxiosResponse<MapdataParkboundaryResponse> =
        await axios.get(`${this.BASE_URL}/parkboundaries`, {
          headers: HEADERS,
          params: { sitecode },
        });

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  // Method to fetch parks data from the NPS API
  async getParks(
    parkCode?: string,
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
    sort: string[] = ['fullName'],
  ): Promise<ParksResponse> {
    try {
      // Make a GET request to the NPS API
      const response: AxiosResponse<ParksResponse> = await axios.get(
        `${this.BASE_URL}/parks`,
        {
          params: { parkCode, stateCode, limit, start, q, sort },
          headers: HEADERS,
        },
      );

      // Return the data from the response
      return response.data;
    } catch (error: unknown) {
      // Handle any errors that occur during the request
      this.handleAxiosError(error);
    }
  }

  async getMultimediaAudios(
    parkCode?: string,
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
  ): Promise<MultimediaAudioResponse> {
    try {
      const response: AxiosResponse<MultimediaAudioResponse> = await axios.get(
        `${this.BASE_URL}/multimedia/audio`,
        {
          headers: HEADERS,
          params: { parkCode, stateCode, limit, start, q },
        },
      );

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  async getMultimediaGalleries(
    parkCode?: string,
    stateCode?: string,
    limit: number = 50,
    start: number = 0,
    q?: string,
  ): Promise<MultimediaGalleriesResponse> {
    try {
      const response: AxiosResponse<MultimediaGalleriesResponse> =
        await axios.get(`${this.BASE_URL}/multimedia/galleries`, {
          headers: HEADERS,
          params: { parkCode, stateCode, limit, start, q },
        });

      return response.data;
    } catch (error: unknown) {
      this.handleAxiosError(error);
    }
  }

  // Method to handle errors from Axios requests
  private handleAxiosError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      // Log Axios-specific error details
      console.error('Axios error:', error.message);
      console.error(
        'Response data:',
        error.response?.data ?? 'No response data',
      );
      throw new Error(`Failed to fetch parks: ${error.message}`);
    } else if (error instanceof Error) {
      // Log generic error details
      console.error('Unexpected error:', error.message);
      throw error;
    } else {
      // Log unknown error details
      console.error('Unknown error:', JSON.stringify(error));
      throw new Error('An unknown error occurred');
    }
  }
}
