import { Injectable } from '@nestjs/common';
import { IGreetingService } from './greeting-service.interface';

@Injectable()
export class ProfessionalGreetingService implements IGreetingService {
  public async greet(name: string): Promise<string> {
    return `Hello ${name}, how are you today?`;
  }
}
