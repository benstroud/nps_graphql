import { Module } from '@nestjs/common';
import { NpsService } from './nps.service';
import { ParksResolver } from './nps.resolver';

@Module({
  providers: [NpsService, ParksResolver],
})
export class NpsModule {}
