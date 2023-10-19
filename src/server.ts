import express from "express";
import authRouter from "./infra/routes/auth.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(authRouter);

app.listen(3333, () => console.log(`Server is running at 3333.`));
