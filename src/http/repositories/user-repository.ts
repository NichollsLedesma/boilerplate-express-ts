import { User } from "../models";

export class UserRepository {
  public async getAll(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  }

  public async getOne(id: string): Promise<User | null> {
    const user = await User.findByPk(id);
    return user;
  }
}
