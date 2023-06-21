import { Injectable } from '@nestjs/common';
import { User } from '../../domain/user';

@Injectable()
export class UserRepository {
  async getUser(id: string): Promise<User> {
    return {
      id,
      name: `User${id}`,
    };
  }
}
