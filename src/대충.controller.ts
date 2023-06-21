import { Controller, Get } from '@nestjs/common';
import { 대충클래스 } from './대충.클래스';

@Controller('dd')
export class 대충Controller {
  constructor(private readonly 대충인스턴스: 대충클래스) {}

  @Get()
  async run대충(): Promise<void> {
    return this.대충인스턴스.대충메소드('김대충');
  }
}
