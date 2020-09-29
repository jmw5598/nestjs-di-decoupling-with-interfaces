import { Test, TestingModule } from '@nestjs/testing';
import { PersonalGreetingService } from './personal-greeting.service';

describe('PersonalGreetingService', () => {
  let service: PersonalGreetingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalGreetingService],
    }).compile();

    service = module.get<PersonalGreetingService>(PersonalGreetingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
