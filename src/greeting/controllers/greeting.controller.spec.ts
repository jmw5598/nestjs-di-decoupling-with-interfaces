import { Test, TestingModule } from '@nestjs/testing';
import { GreetingController } from './greeting.controller';

describe('Greeting Controller', () => {
  let controller: GreetingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreetingController],
    }).compile();

    controller = module.get<GreetingController>(GreetingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
