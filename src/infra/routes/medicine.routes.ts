import { Router } from "express";
import medicineController from "../../application/controllers/medicine.controller"; 

const medicineRouter = Router();

medicineRouter.post("/medicine", medicineController.create);

export default medicineRouter;