import { Module } from '@nestjs/common';
import { GreetingModule } from './greeting/greeting.module';

@Module({
  imports: [GreetingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
