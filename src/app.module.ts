import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { AopModule } from '@toss/nestjs-aop';
import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';
import { CacheDecorator } from './cache.decorator';
import { FriendRepositoryModule } from './repository/friend/friend-repository.module';
import { UserRepositoryModule } from './repository/user/user-repository.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { 대충Controller } from './대충.controller';
import { DaechungProvider } from './대충.decorator';
import { 대충클래스 } from './대충.클래스';

@Module({
  imports: [
    AopModule,
    CacheModule.register<RedisClientOptions>({
      store: redisStore,

      // Store-specific configuration:
      host: 'localhost',
      port: 6379,
    }),
    UserRepositoryModule,
    FriendRepositoryModule,
  ],
  controllers: [대충Controller, UserController],
  providers: [대충클래스, UserService, DaechungProvider, CacheDecorator],
})
export class AppModule {}
