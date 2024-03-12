import { Router } from "express";
import videoController from "../../application/controllers/video.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const videoRouter = Router();

videoRouter.post("/video", authenticateToken, videoController.create);

export default videoRouter;