import { Injectable } from '@nestjs/common';
import { 대충데코레이터 } from './대충.decorator';

@Injectable()
export class 대충클래스 {
  @대충데코레이터
  대충메소드(name: string): void {
    console.log(`안녕! ${name}!!`);
  }
}

// const 대충인스턴스 = new 대충클래스();
// 대충인스턴스.대충메소드('김코딩');
// 안녕! 김코딩!!
// 야 너 몇살이야?
