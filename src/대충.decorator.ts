import {
  Aspect,
  LazyDecorator,
  WrapParams,
  createDecorator,
} from '@toss/nestjs-aop';

const DAECHUNG_DECORATOR = Symbol('대충_데코레이터');
export const 대충데코레이터 = createDecorator(DAECHUNG_DECORATOR);

@Aspect(DAECHUNG_DECORATOR)
export class DaechungProvider implements LazyDecorator {
  wrap({ method }: WrapParams) {
    return async (...args: any) => {
      method(...args); // 원래 메소드 실행
      console.log('야 너 몇살이야?');
    };
  }
}

// export function 대충데코레이터(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor,
// ) {
//   const originalMethod = descriptor.value; // 기존 함수를 저장

//   descriptor.value = function (...args: any[]) {
//     originalMethod.apply(this, args); // 기존 함수를 실행
//     console.log('야 너 몇살이야?');
//   };
// }
