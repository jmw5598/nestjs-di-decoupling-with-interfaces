import { Module } from '@nestjs/common';
import { GreetingModule } from './greeting/greeting.module';
import { ChatModule } from './chat/chat.module';
import { greetingServiceProvider } from './app.providers';

@Module({
  imports: [
    GreetingModule.registerProviders([greetingServiceProvider]), 
    ChatModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
