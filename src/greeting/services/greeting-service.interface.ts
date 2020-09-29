export const GREETING_SERVICE = 'GREETING SERVICE';

export interface IGreetingService {
  greet(name: string): Promise<string>;
}