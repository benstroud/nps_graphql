import { Test, TestingModule } from '@nestjs/testing';
import { NpsResolver } from './nps.resolver';

describe('NpsResolver', () => {
  let resolver: NpsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NpsResolver],
    }).compile();

    resolver = module.get<NpsResolver>(NpsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
