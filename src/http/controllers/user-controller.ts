import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { UserService } from "../services/user-service";

@autoInjectable()
export class UserController {
  constructor(@inject(UserService) private userService: UserService) {}

  public async getAll(_: Request, response: Response): Promise<void> {
    const data = await this.userService.getAll();
    response.json(data);
  }

  public async getOne(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const data = await this.userService.getOne(id);
    response.json(data);
  }

  public async add(request: Request, response: Response): Promise<void> {
    const { firstName, lastName } = request.body;

    const data = await this.userService.add(firstName,lastName);
    response.json(data);
  }
}
