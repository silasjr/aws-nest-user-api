import { User } from './user.models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  users: User[] = [];

  async listAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  getById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  save(user: User): Promise<User> {
    return this.userModel.create(user);
  }
}
