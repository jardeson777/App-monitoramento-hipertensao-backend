import { Request, Response, Router } from "express";
import healthAgentController from "../../application/controllers/health-agent.controller";

const healthAgentRouter = Router();

healthAgentRouter.post("/agent", healthAgentController.register);

export default healthAgentRouter;
