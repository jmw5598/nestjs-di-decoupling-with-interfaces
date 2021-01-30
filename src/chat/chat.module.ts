import { Module } from '@nestjs/common';
import { ChatController } from './controllers/chat.controller';

import { GreetingModule } from '../greeting/greeting.module';
import { greetingServiceProvider } from '../app.providers';

@Module({
  imports: [GreetingModule.registerProviders([greetingServiceProvider])],
  controllers: [ChatController],
  providers: [greetingServiceProvider]
})
export class ChatModule {}
