import { Request, Response, Router } from "express";
import registerController from "../../application/controllers/register.controller";

const registerRouter = Router();

registerRouter.post("/register", registerController.register);

export default registerRouter;
