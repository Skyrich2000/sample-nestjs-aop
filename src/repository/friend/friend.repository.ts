import { Injectable } from '@nestjs/common';
import { User } from '../../domain/user';

@Injectable()
export class FriendRepository {
  async getFriends(id: string): Promise<User[]> {
    return [
      {
        id,
        name: `User3${id}`,
      },
      {
        id,
        name: `User4${id}`,
      },
      {
        id,
        name: `User5${id}`,
      },
    ];
  }
}
