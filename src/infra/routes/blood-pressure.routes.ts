import { Router } from "express";
import BloodPressureController from "../../application/controllers/blood-pressure.controller";


const bloodPressureRouter = Router();

bloodPressureRouter.post('/pressure', BloodPressureController.create);

export default bloodPressureRouter;