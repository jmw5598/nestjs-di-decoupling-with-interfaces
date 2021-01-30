import { Controller, Get, Inject } from '@nestjs/common';
import { GREETING_SERVICE, IGreetingService } from 'src/greeting/services/greeting-service.interface';

@Controller('chat')
export class ChatController {
  constructor(
    @Inject(GREETING_SERVICE)
    private readonly _greetingService: IGreetingService
  ) {}

  @Get('introduction')
  public getIntroduction(): Promise<string> {
    return this._greetingService.greet('new user');
  }
}
