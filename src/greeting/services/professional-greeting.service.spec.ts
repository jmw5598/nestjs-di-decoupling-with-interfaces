import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalGreetingService } from './professional-greeting.service';

describe('ProfessionalGreetingService', () => {
  let service: ProfessionalGreetingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessionalGreetingService],
    }).compile();

    service = module.get<ProfessionalGreetingService>(ProfessionalGreetingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
