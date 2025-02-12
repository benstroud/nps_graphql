import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Activity {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class ActivityResponse {
  @Field()
  total: string;

  @Field(() => [Activity])
  data: Activity[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class ActivityParkItem {
  @Field()
  states: string;

  @Field()
  fullName: string;

  @Field()
  url: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field()
  name: string;
}

@ObjectType()
export class ActivityPark {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [ActivityParkItem])
  parks: ActivityParkItem[];
}

@ObjectType()
export class ActivityParkResponse {
  @Field()
  total: string;

  @Field(() => [ActivityPark])
  data: ActivityPark[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

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
export class RelatedRoadEvent {
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
export class AlertItem {
  @Field()
  category: string;

  @Field()
  description: string;

  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  parkCode: string;

  @Field()
  url: string;

  @Field()
  lastIndexedDate: string;

  @Field(() => [RelatedRoadEvent])
  relatedRoadEvents: RelatedRoadEvent[];
}

@ObjectType()
export class AlertResponse {
  @Field()
  total: string;

  @Field(() => [AlertItem])
  data: AlertItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class AmenityItem {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class AmenitiesResponse {
  @Field()
  total: string;

  @Field(() => [AmenityItem])
  data: AmenityItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class AmenitiesParksPlacesPark {
  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  id: string;
}

@ObjectType()
export class AmenitiesParksPlacesItem {
  @Field()
  states: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field()
  fullName: string;

  @Field(() => [AmenitiesParksPlacesPark])
  places: AmenitiesParksPlacesPark[];

  @Field()
  url: string;

  @Field()
  name: string;
}

@ObjectType()
export class AmenitiesParksPlacesResponse {
  @Field()
  total: string;

  @Field(() => [AmenitiesParksPlacesItem])
  data: AmenitiesParksPlacesItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class VisitorCenterItem {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class AmenitiesParksVisitorCentersItem {
  @Field()
  states: string;

  @Field()
  fullName: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field(() => [VisitorCenterItem])
  visitorcenters: VisitorCenterItem[];
}

@ObjectType()
export class AmenitiesParksVisitorCentersResponse {
  @Field()
  total: string;

  @Field(() => [AmenitiesParksVisitorCentersItem])
  data: AmenitiesParksVisitorCentersItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class RelatedParkItem {
  @Field()
  states: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field()
  fullName: string;

  @Field()
  url: string;

  @Field()
  name: string;
}

@ObjectType()
export class ListingImageItem {
  @Field()
  url: string;

  @Field()
  credit: string;

  @Field()
  altText: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  caption: string;
}

@ObjectType()
export class ArticleItem {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field(() => ListingImageItem)
  listingImage: ListingImageItem[];

  @Field()
  listingDescription: string;

  @Field(() => [RelatedParkItem])
  relatedParks: RelatedParkItem[];

  @Field()
  geometryPoiId: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  latLong: string;
}

@ObjectType()
export class ArticleResponse {
  @Field()
  total: string;

  @Field(() => [ArticleItem])
  data: ArticleItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Accessibility {
  @Field()
  wheelchairaccess: string;

  @Field()
  internetinfo: string;

  @Field()
  rvallowed: number;

  @Field()
  cellphoneinfo: string;

  @Field()
  firestovepolicy: string;

  @Field()
  rvmaxlength: number;

  @Field()
  additionalinfo: string;

  @Field()
  trailermaxlength: number;

  @Field()
  adainfo: string;

  @Field()
  rvinfo: string;

  @Field(() => [String])
  accessroads: string[];

  @Field()
  trailerallowed: number;

  @Field(() => [String])
  classifications: string[];
}

@ObjectType()
export class Amenity {
  @Field()
  trashrecyclingcollection: string;

  @Field(() => [String])
  toilets: string[];

  @Field()
  internetconnectivity: boolean;

  @Field(() => [String])
  showers: string[];

  @Field()
  cellphonereception: boolean;

  @Field()
  laundry: boolean;

  @Field()
  amphitheater: string;

  @Field()
  dumpstation: boolean;

  @Field()
  campstore: boolean;

  @Field()
  stafforvolunteerhostonsite: string;

  @Field(() => [String])
  potablewater: string[];

  @Field()
  iceavailableforsale: boolean;

  @Field()
  firewoodforsale: boolean;

  @Field()
  ampitheater: string;

  @Field()
  foodstoragelockers: string;
}

@ObjectType()
export class Campsite {
  @Field()
  other: number;

  @Field()
  group: number;

  @Field()
  horse: number;

  @Field()
  totalsites: number;

  @Field()
  tentonly: number;

  @Field()
  electricalhookups: number;

  @Field()
  rvonly: number;

  @Field()
  walkboatto: number;
}

@ObjectType()
export class CampgroundItem {
  @Field(() => [Accessibility])
  accessibility: Accessibility[];

  @Field(() => [Address])
  addresses: Address[];

  @Field(() => [Amenity])
  amenities: Amenity[];

  @Field(() => [Campsite])
  campsites: Campsite[];

  @Field(() => [Contact])
  contacts: Contact[];

  @Field()
  description: string;

  @Field()
  directionsoverview: string;

  @Field()
  directionsUrl: string;

  @Field({ nullable: true })
  fees?: string;

  @Field()
  geometryPoiId: string;

  @Field()
  id: number;

  @Field({ nullable: true })
  images?: string;

  @Field()
  latLong: string;

  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field(() => [Multimedia])
  multimedia: Multimedia[];

  @Field()
  name: string;

  @Field({ nullable: true })
  operatingHours?: string;

  @Field()
  parkCode: string;

  @Field({ nullable: true })
  regulationsoverview?: string;

  @Field()
  regulationsurl: string;

  @Field()
  relevanceScore: number;

  @Field()
  reservationsdescription: string;

  @Field()
  reservationsitesfirstcome: string;

  @Field()
  reservationssitesreservable: string;

  @Field()
  reservationsurl: string;

  @Field()
  weatheroverview: string;
}

@ObjectType()
export class CampgroundResponse {
  @Field()
  total: string;

  @Field(() => [CampgroundItem])
  data: CampgroundItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class Contact {
  @Field(() => [PhoneNumber])
  phoneNumbers: PhoneNumber[];

  @Field(() => [EmailAddress])
  emailAddresses: EmailAddress[];
}

@ObjectType()
export class EmailAddress {
  @Field()
  description: string;

  @Field()
  emailAddress: string;
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
export class EntrancePass {
  @Field()
  cost: string;

  @Field()
  description: string;

  @Field()
  title: string;
}

@ObjectType()
export class EventTime {
  @Field()
  timestart: string;

  @Field()
  timeend: string;

  @Field()
  sunsetend: boolean;

  @Field()
  sunrisestart: boolean;
}

@ObjectType()
export class EventImage {
  @Field()
  altText: string;

  @Field()
  caption: string;

  @Field()
  credit: string;

  @Field()
  imageId: string;

  @Field()
  ordinal: string;

  @Field()
  path: string;

  @Field()
  title: string;

  @Field()
  url: string;
}

@ObjectType()
export class EventItem {
  @Field()
  category: string;

  @Field()
  categoryid: string;

  @Field()
  contactemailaddress: string;

  @Field()
  contactname: string;

  @Field()
  contacttelephonenumber: string;

  @Field()
  createuser: string;

  @Field()
  date: string;

  @Field()
  dateend: string;

  @Field(() => [String])
  dates: string[];

  @Field()
  datestart: string;

  @Field()
  datetimecreated: string;

  @Field()
  datetimeupdated: string;

  @Field()
  description: string;

  @Field()
  eventid: string;

  @Field()
  feeinfo: string;

  @Field()
  geometryPoiId: string;

  @Field()
  id: string;

  @Field()
  imageidlist: string;

  @Field(() => [EventImage])
  images: EventImage[];

  @Field()
  infourl: string;

  @Field()
  isallday: boolean;

  @Field()
  isfree: boolean;

  @Field()
  isrecurring: boolean;

  @Field()
  isregresrequired: boolean;

  @Field()
  latitude: number;

  @Field()
  location: string;

  @Field()
  longitude: number;

  @Field()
  organizationname: string;

  @Field()
  parkfullname: string;

  @Field()
  portalname: string;

  @Field()
  recurrencedateend: string;

  @Field()
  recurrencedatestart: string;

  @Field()
  recurrencerule: string;

  @Field()
  regresinfo: string;

  @Field()
  regresurl: string;

  @Field()
  sitecode: string;

  @Field()
  sitetype: string;

  @Field()
  subjectname: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  timeinfo: string;

  @Field(() => [EventTime])
  times: EventTime[];

  @Field()
  title: string;

  @Field(() => [String])
  types: string[];
}

@ObjectType()
export class EventResponse {
  @Field()
  total: string;

  @Field(() => [EventItem])
  data: EventItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class DateDetail {
  @Field()
  day: number;

  @Field()
  holiday: string;

  @Field()
  month: number;
}

@ObjectType()
export class Fee {
  @Field()
  cost: string;

  @Field()
  description: string;

  @Field(() => DateDetail)
  endDate: DateDetail;

  @Field()
  entranceFeeType: string;

  @Field()
  exceptions: string;

  @Field()
  id: string;

  @Field()
  informationUrl: string;

  @Field()
  payGovPurchaseUrl: string;

  @Field()
  paymentDescription: string;

  @Field()
  purchaseUrl: string;

  @Field()
  recGovPurchaseUrl: string;

  @Field(() => DateDetail)
  startDate: DateDetail;

  @Field()
  timedEntryLocation: string;

  @Field()
  timedEntryShortDescription: string;
}

@ObjectType()
export class PassImage {
  @Field()
  altText: string;

  @Field()
  caption: string;

  @Field()
  credit: string;

  @Field()
  title: string;

  @Field()
  url: string;
}

@ObjectType()
export class Pass {
  @Field()
  category: string;

  @Field()
  cost: string;

  @Field()
  description: string;

  @Field()
  exceptions: string;

  @Field()
  id: string;

  @Field(() => [PassImage])
  image: PassImage[];

  @Field()
  informationUrl: string;

  @Field()
  payGovPurchaseUrl: string;

  @Field()
  paymentDescription: string;

  @Field()
  npsGovPurchaseUrl: string;

  @Field()
  recGovPurchaseUrl: string;
}

@ObjectType()
export class RelatedMultiSitePassImage {
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
export class PurchaseLocation {
  @Field()
  type: string;

  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  paymentMethod: string;
}

@ObjectType()
export class RelatedPark {
  @Field()
  states: string;

  @Field()
  fullName: string;

  @Field()
  url: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field()
  name: string;
}

@ObjectType()
export class RelatedMultiSitePass {
  @Field()
  title: string;

  @Field()
  audience: string;

  @Field()
  type: string;

  @Field()
  cost: string;

  @Field()
  description: string;

  @Field(() => [RelatedMultiSitePassImage])
  images: RelatedMultiSitePassImage[];

  @Field(() => [PurchaseLocation])
  purchaseLocations: PurchaseLocation[];

  @Field(() => [RelatedPark])
  relatedParks: RelatedPark[];
}

@ObjectType()
export class FeesPassesItem {
  @Field()
  cashless: string;

  @Field()
  entranceFeeDescription: string;

  @Field()
  entrancePassesDescription: string;

  @Field(() => [Fee])
  fees: Fee[];

  @Field()
  feesAtWorkUrl: string;

  @Field()
  isFeeFreePark: boolean;

  @Field()
  isInteragencyPassAccepted: boolean;

  @Field()
  isParkingFeePossible: boolean;

  @Field()
  parkCode: string;

  @Field()
  parkingDetailsUrl: string;

  @Field(() => [Pass])
  passes: Pass[];

  @Field()
  timedEntryHeading: string;

  @Field()
  timedEntryDescription: string;

  @Field()
  isParkingOrTransportationFeePossible: boolean;

  @Field()
  paidParkingHeading: string;

  @Field()
  paidParkingDescription: string;

  @Field()
  customFeeHeading: string;

  @Field()
  customFeeDescription: string;

  @Field()
  customFeeLinkUrl: string;

  @Field()
  customFeeLinkText: string;

  @Field()
  contentOrderOrdinals: string;

  @Field(() => [RelatedMultiSitePass])
  relatedMultiSitePasses: RelatedMultiSitePass[];
}

@ObjectType()
export class FeesPassesResponse {
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
export class CommonCore {
  @Field()
  statestandards: string;

  @Field(() => [String])
  mathstandards: string[];

  @Field()
  additionalstandards: string;

  @Field(() => [String])
  elastandards: string[];
}

@ObjectType()
export class LessonPlanItem {
  @Field(() => [CommonCore])
  commoncore: CommonCore[];

  @Field()
  duration: string;

  @Field()
  gradelevel: string;

  @Field()
  id: number;

  @Field(() => [String])
  parks: string[];

  @Field()
  questionobjective: string;

  @Field()
  subject: string;

  @Field()
  title: string;

  @Field()
  url: string;
}

@ObjectType()
export class LessonPlanResponse {
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
export class Geometry {
  @Field()
  type: string;

  @Field(() => [[[Number]]])
  coordinates: number[][][];
}

@ObjectType()
export class MapdataParkboundaryResponse {
  @Field()
  type: string;

  @Field()
  id: string;

  @Field(() => Geometry)
  geometry: Geometry;
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
export class SplashImage {
  @Field()
  url: string;
}

/* @ObjectType()
export class RelatedPark {
  @Field()
  states: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;
}
 */
@ObjectType()
export class Version {
  @Field()
  fileSize: number;

  @Field()
  fileType: string;

  @Field()
  url: string;
}

@ObjectType()
export class MultimediaAudioItem {
  @Field()
  id: string;

  @Field()
  permalinkUrl: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => SplashImage)
  splashImage: SplashImage;

  @Field(() => [RelatedPark])
  relatedParks: RelatedPark[];

  @Field(() => [String])
  tags: string[];

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  geometryPoiId: string;

  @Field()
  durationMs: number;

  @Field()
  credit: string;

  @Field()
  transcript: string;

  @Field()
  callToAction: string;

  @Field()
  callToActionUrl: string;

  @Field(() => Version)
  versions: Version;
}

@ObjectType()
export class MultimediaAudioResponse {
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
export class MultimediaGalleriesImage {
  @Field()
  url: string;

  @Field()
  altText: string;

  @Field()
  title: string;

  @Field()
  description: string;
}

@ObjectType()
export class MultimediaGalleriesRelatedPark {
  @Field()
  states: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field()
  fullName: string;

  @Field()
  url: string;

  @Field()
  name: string;
}

@ObjectType()
export class MultimediaGalleriesConstraintsInfo {
  @Field()
  constraint: string;

  @Field()
  grantingRights: string;
}

@ObjectType()
export class MultimediaGalleriesItem {
  @Field()
  id: string;

  @Field()
  url: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [MultimediaGalleriesImage])
  images: MultimediaGalleriesImage[];

  @Field(() => [MultimediaGalleriesRelatedPark])
  relatedParks: MultimediaGalleriesRelatedPark[];

  @Field(() => [String])
  tags: string[];

  @Field()
  assetCount: number;

  @Field(() => MultimediaGalleriesConstraintsInfo)
  constraintsInfo: MultimediaGalleriesConstraintsInfo;

  @Field()
  copyright: string;
}

@ObjectType()
export class MultimediaGalleriesResponse {
  @Field()
  total: string;

  @Field(() => [MultimediaGalleriesItem])
  data: MultimediaGalleriesItem[];

  @Field()
  limit: string;

  @Field()
  start: string;
}

@ObjectType()
export class FileInfo {
  @Field()
  url: string;

  @Field()
  fileType: string;

  @Field()
  widthPixels: string;

  @Field()
  heightPixels: string;

  @Field()
  fileSizeKb: string;
}

@ObjectType()
export class MultimediaGalleriesAssetsConstraintsInfo {
  @Field()
  constraint: string;

  @Field()
  grantingRights: string;
}

@ObjectType()
export class MultimediaGalleriesAssetsRelatedPark {
  @Field()
  states: string;

  @Field()
  parkCode: string;

  @Field()
  designation: string;

  @Field()
  fullName: string;

  @Field()
  url: string;

  @Field()
  name: string;
}

@ObjectType()
export class MultimediaGalleriesAssetsItem {
  @Field()
  id: string;

  @Field()
  permalinkUrl: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  altText: string;

  @Field(() => FileInfo)
  fileInfo: FileInfo;

  @Field(() => [MultimediaGalleriesAssetsRelatedPark])
  relatedParks: MultimediaGalleriesAssetsRelatedPark[];

  @Field(() => [String])
  tags: string[];

  @Field()
  credit: string;

  @Field(() => MultimediaGalleriesAssetsConstraintsInfo)
  constraintsInfo: MultimediaGalleriesAssetsConstraintsInfo;

  @Field()
  copyright: string;

  @Field()
  ordinal: string;
}

@ObjectType()
export class MultimediaGalleriesAssetsResponse {
  @Field()
  total: string;

  @Field(() => [MultimediaGalleriesAssetsItem])
  data: MultimediaGalleriesAssetsItem[];

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
