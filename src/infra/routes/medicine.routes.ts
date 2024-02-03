import { Router } from "express";
import medicineController from "../../application/controllers/medicine.controller";

const medicineRouter = Router();

medicineRouter.post("/medicine", medicineController.create);
medicineRouter.post("/medicine/take", medicineController.take);
medicineRouter.delete("/medicine/:id", medicineController.delete);
medicineRouter.get("/medicine/find", medicineController.findByID);
medicineRouter.get("/medicine/list", medicineController.list);

export default medicineRouter;