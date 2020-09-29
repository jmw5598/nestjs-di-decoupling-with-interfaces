import { Controller, Get, Inject, Query } from '@nestjs/common';
import { GREETING_SERVICE, IGreetingService } from '../services/greeting-service.interface';

@Controller('greeting')
export class GreetingController {
  constructor(
    @Inject(GREETING_SERVICE)
    private readonly _greetingService: IGreetingService
  ) {}

  @Get()
  public async getGreeting(@Query('name') name: string): Promise<string> {
    return await this._greetingService.greet(name || 'John');
  }
}
