import { Router } from "express";
import medicineController from "../../application/controllers/medicine.controller";

const medicineRouter = Router();

medicineRouter.post("/medicine", medicineController.create);
medicineRouter.post("/medicine/take", medicineController.take);
medicineRouter.get("/medicine/find", medicineController.findByID);
medicineRouter.patch("/medicine/:medicineId", medicineController.edit);

export default medicineRouter;