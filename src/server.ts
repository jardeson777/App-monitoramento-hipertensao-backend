import express from "express";
import authRouter from "./infra/routes/auth.routes";
import healthAgentRouter from "./infra/routes/healthAgent.routes";
import dotenv from "dotenv";
import patientRouter from "./infra/routes/patient.routes";
import bloodPressureRouter from "./infra/routes/blood-pressure.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(authRouter);
app.use(healthAgentRouter);
app.use(patientRouter);
app.use(bloodPressureRouter);

app.listen(5555, () => console.log(`Server is running at 5555.`));
