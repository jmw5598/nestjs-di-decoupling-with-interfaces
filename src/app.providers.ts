import { GREETING_SERVICE } from "./greeting/services/greeting-service.interface";
import { PersonalGreetingService } from "./greeting/services/personal-greeting.service";

export const greetingServiceProvider = {
  useClass: PersonalGreetingService,
  provide: GREETING_SERVICE
}
