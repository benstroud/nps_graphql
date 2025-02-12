import { Test, TestingModule } from '@nestjs/testing';
import { NpsResolver } from './nps.resolver';
import { NpsService } from './nps.service';

describe('ParksResolver', () => {
  let resolver: NpsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [], // Add any necessary imports here
      providers: [NpsResolver, NpsService],
    }).compile();

    resolver = module.get<NpsResolver>(NpsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
