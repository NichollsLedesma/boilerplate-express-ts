import { Router } from "express";
import { container, injectable } from "tsyringe";
import { UserController } from "../controllers/user-controller";

@injectable()
export class AppRoutes {
  constructor() { }

  public get routes(): Router {
    const router = Router();
    router.use("/users", this.userRoutes());

    return router;
  }

  /* 
    Bind stuff is because the context
    solutions: 
      1. Adding bind after of function 
      2. make arrow functions in controller class
      2.a. In this class =>router.get("/", (_,res) => { userController.getAll(_,res) });
      2.b. Just change class function to arrow function
  */

  private userRoutes(): Router {
    const router = Router();
    const userController = container.resolve(UserController);
    router.get("/", userController.getAll);
    router.get("/:id", userController.getOne.bind(userController));
    router.post("/", userController.add.bind(userController));

    return router;
  }
}