import { Injectable } from '@nestjs/common';
import { Cache } from './cache.decorator';
import { User } from './domain/user';
import { FriendRepository } from './repository/friend/friend.repository';
import { UserRepository } from './repository/user/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly friendRepository: FriendRepository,
  ) {}

  @Cache
  async getUser(id: string): Promise<User> {
    const user = await this.userRepository.getUser(id);

    return user;
  }

  @Cache
  async getFriend(id: string): Promise<User[]> {
    const friends = await this.friendRepository.getFriends(id);

    return friends;
  }
}
