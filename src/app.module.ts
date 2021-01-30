import { Module } from '@nestjs/common';
import { GreetingModule } from './greeting/greeting.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [GreetingModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
