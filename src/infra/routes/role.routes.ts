import { Request, Response, Router } from "express";
import roleController from "../../application/controllers/role.controller";

const roleRouter = Router();

roleRouter.post("/role", roleController.role);

export default roleRouter;