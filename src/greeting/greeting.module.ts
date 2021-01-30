import { DynamicModule, Module } from '@nestjs/common';
import { GreetingController } from './controllers/greeting.controller';

@Module({})
export class GreetingModule {
  public static registerProviders(providers): DynamicModule {
    return {
      module: GreetingModule,
      controllers: [GreetingController],
      providers: providers
    }
  }
}
