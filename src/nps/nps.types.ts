import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field()
  countryCode: string;

  @Field()
  city: string;

  @Field()
  provinceTerritoryCode: string;

  @Field()
  postalCode: string;

  @Field()
  type: string;

  @Field()
  line1: string;

  @Field()
  stateCode: string;

  @Field({ nullable: true })
  line2?: string;

  @Field({ nullable: true })
  line3?: string;
}

@ObjectType()
export class EntranceFee {
  @Field()
  cost: string;

  @Field()
  description: string;

  @Field()
  title: string;
}

@ObjectType()
export class Multimedia {
  @Field()
  title: string;

  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  url: string;
}

@ObjectType()
export class OperatingHourStandardHours {
  @Field()
  wednesday: string;

  @Field()
  monday: string;

  @Field()
  thursday: string;

  @Field()
  sunday: string;

  @Field()
  tuesday: string;

  @Field()
  friday: string;

  @Field()
  saturday: string;
}

@ObjectType()
export class OperatingHourException {
  @Field()
  startDate: string;

  @Field()
  name: string;

  @Field()
  endDate: string;

  @Field(() => OperatingHourStandardHours)
  exceptionHours: OperatingHourStandardHours;
}

@ObjectType()
export class OperatingHour {
  @Field(() => [OperatingHourException])
  exceptions: OperatingHourException[];

  @Field()
  description: string;

  @Field(() => OperatingHourStandardHours)
  standardHours: OperatingHourStandardHours;

  @Field()
  name: string;
}

@ObjectType()
export class PhoneNumber {
  @Field()
  phoneNumber: string;

  @Field()
  description: string;

  @Field()
  extension: string;

  @Field()
  type: string;
}

@ObjectType()
export class EmailAddress {
  @Field()
  description: string;

  @Field()
  emailAddress: string;
}

@ObjectType()
export class Contact {
  @Field(() => [PhoneNumber])
  phoneNumbers: PhoneNumber[];

  @Field(() => [EmailAddress])
  emailAddresses: EmailAddress[];
}

@ObjectType()
export class EntrancePass {
  @Field()
  cost: string;

  @Field()
  description: string;

  @Field()
  title: string;
}

@ObjectType()
export class Image {
  @Field()
  credit: string;

  @Field()
  title: string;

  @Field()
  altText: string;

  @Field()
  caption: string;

  @Field()
  url: string;
}

@ObjectType()
export class ParksResponse {
  @Field(() => String)
  total: string;

  @Field(() => [Park])
  data: Park[];

  @Field(() => String)
  limit: string;

  @Field(() => String)
  start: string;
}

@ObjectType()
export class Activity {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class ActivityPark {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Alert {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Amenities {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class AmenitiesParksPlaces {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class AmenitiesParksVisitorCenters {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Article {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Campground {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Event {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class FeesPasses {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class LessonPlan {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class MapdataParkboundary {
  @Field()
  type: string;

  @Field()
  id: string;

  @Field(() => [String])
  coordinates: string[];
}

@ObjectType()
export class MultimediaAudio {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class MultimediaGalleries {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class MultimediaGalleriesAssets {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class MultimediaVideos {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class NewsRelease {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Parkinglot {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Park {
  @Field(() => [String])
  states: string[];

  @Field()
  weatherInfo: string;

  @Field()
  directionsInfo: string;

  @Field(() => [Address])
  addresses: Address[];

  @Field(() => [EntranceFee])
  entranceFees: EntranceFee[];

  @Field(() => [Topic])
  topics: Topic[];

  @Field(() => [Multimedia])
  multimedia: Multimedia[];

  @Field()
  name: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field(() => [Activity])
  activities: Activity[];

  @Field(() => [OperatingHour])
  operatingHours: OperatingHour[];

  @Field()
  url: string;

  @Field(() => Contact)
  contacts: Contact[];

  @Field(() => [EntrancePass])
  entrancePasses: EntrancePass[];

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field(() => [Image])
  images: Image[];

  @Field()
  relevanceScore: number;

  @Field()
  fullName: string;

  @Field()
  latLong: string;

  @Field()
  id: string;

  @Field()
  directionsUrl: string;

  @Field()
  description: string;
}

@ObjectType()
export class Passportstamplocations {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Person {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Place {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class RoadEvents {
  @Field(() => [String])
  features: string[];

  @Field()
  type: string;
}

@ObjectType()
export class ThingsToDo {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Topic {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class TopicPark {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Tours {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class VisitorCenter {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Webcams {
  @Field()
  total: string;

  @Field(() => [String])
  data: string[];

  @Field()
  limit: string;

  @Field()
  start: string;
}
