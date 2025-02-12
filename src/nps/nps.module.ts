import { Module } from '@nestjs/common';
import { NpsService } from './nps.service';
import { NpsResolver } from './nps.resolver';

@Module({
  providers: [NpsService, NpsResolver],
})
export class NpsModule {}
