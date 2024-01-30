import { Request, Response, Router } from "express";
import medicineIDController from "../../application/controllers/medicine-id.controller";

const medicineIDRouter = Router();

medicineIDRouter.post("/medicinebyid", medicineIDController.findByID);

export default medicineIDRouter;