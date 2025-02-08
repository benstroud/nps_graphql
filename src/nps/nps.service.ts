import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { ParksResponse } from './nps.types';

@Injectable()
export class NpsService {
  private readonly BASE_URL = 'https://developer.nps.gov/api/v1';
  private readonly API_KEY = process.env.NPS_API_KEY;

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
          headers: { 'X-Api-Key': this.API_KEY } as RawAxiosRequestHeaders,
        },
      );

      // Return the data from the response
      return response.data;
    } catch (error: unknown) {
      // Handle any errors that occur during the request
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
