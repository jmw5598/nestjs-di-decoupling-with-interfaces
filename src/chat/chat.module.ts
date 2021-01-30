import { Module } from '@nestjs/common';
import { ChatController } from './controllers/chat.controller';

import { GreetingModule } from '../greeting/greeting.module';
import { IGreetingService, GREETING_SERVICE } from '../greeting/services/greeting-service.interface';
import { PersonalGreetingService } from '../greeting/services/personal-greeting.service';

const greetingService = {
  useClass: PersonalGreetingService,
  provide: GREETING_SERVICE
}

@Module({
  imports: [GreetingModule.registerProviders([greetingService])],
  controllers: [ChatController],
  providers: [greetingService]
})
export class ChatModule {}
