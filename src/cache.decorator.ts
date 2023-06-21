import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import {
  Aspect,
  LazyDecorator,
  WrapParams,
  createDecorator,
} from '@toss/nestjs-aop';
import { Cache as CacheManager } from 'cache-manager';

const CACHE_DECORATOR = Symbol('CACHE_DECORATOR');
export const Cache = createDecorator(CACHE_DECORATOR);

@Aspect(CACHE_DECORATOR)
export class CacheDecorator implements LazyDecorator {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: CacheManager,
  ) {}

  wrap({ method, methodName }: WrapParams) {
    return async (...args: any) => {
      const key = `${methodName}-${JSON.stringify(args)}`; // 캐시 키 생성
      const data = await this.cacheManager.get(key); // 캐시 키로 데이터 조회

      if (data) {
        return data;
      }

      const result = await method(...args);

      await this.cacheManager.set(key, result);

      return result;
    };
  }
}

// export function Cache(
//   target: any, // 대상 클래스
//   propertyKey: string, // 대상 메소드 이름
//   descriptor: PropertyDescriptor, // 메소드 정보
// ) {
//   const originalMethod = descriptor.value; // 기존 함수를 저장

//   descriptor.value = async function (...args: any[]) {
//     const { cacheManager } = this as { cacheManager: CacheManager }; // 캐시 매니저 뜯어오기

//     const key = `${propertyKey}-${JSON.stringify(args)}`; // 캐시 키 생성
//     const data = await cacheManager.get(key); // 캐시 키로 데이터 조회
//     if (data) {
//       return data;
//     }

//     const result = await originalMethod.apply(this, args); // 기존 함수를 실행

//     await cacheManager.set(key, result); // 캐시 키에 결과 저장

//     return result; // 결과 반환
//   };
// }
