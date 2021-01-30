import { DynamicModule, Module } from '@nestjs/common';
import { ProfessionalGreetingService } from './services/professional-greeting.service';
import { PersonalGreetingService } from './services/personal-greeting.service';
import { GREETING_SERVICE } from './services/greeting-service.interface';
import { GreetingController } from './controllers/greeting.controller';

@Module({
  providers: [
    {
      // You can switch useClass to different implementation
      useClass: ProfessionalGreetingService,
      provide: GREETING_SERVICE
    }
  ],
  controllers: [
    GreetingController
  ]
})
export class GreetingModule {
  public static registerProviders(providers): DynamicModule {
    return {
      module: GreetingModule,
      providers: providers
    }
  }
}
