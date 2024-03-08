import { Router } from "express";
import patientController from "../../application/controllers/patient.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const patientRouter = Router();

patientRouter.post("/patient", authenticateToken, patientController.create);

export default patientRouter;
