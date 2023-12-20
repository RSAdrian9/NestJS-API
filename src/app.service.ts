import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  user: any;
    note: any;
  getHello(): string {
    return 'Hello World!';
  }
}
