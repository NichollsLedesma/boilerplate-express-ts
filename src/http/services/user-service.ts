import { inject, injectable } from "tsyringe";
import { User } from "../models";
import { UserRepository } from "../repositories";

@injectable()
export class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) { }

  public async getAll(): Promise<User[]> {
    const data = await this.userRepository.getAll();
    return data
  }

  public getOne(id: string): Promise<User | null> {
    return this.userRepository.getOne(id);
  }

  public async add(firstName: any, lastName: any) {
    const newUser = await User.create({ firstName, lastName });
    return newUser;
  }
}
