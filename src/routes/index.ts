import express from "express";
import cors from "cors";
import { pgHelper } from "../db/pg-helper";
import { userRouter } from "./users";

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);

pgHelper.connect()
.then(() => {
app.listen(process.env.PORT || 8080, () => console.log("API RODANDO"));
}).catch((err) => console.log(err));    