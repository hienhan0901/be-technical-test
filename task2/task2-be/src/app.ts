import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import usersRoute from "./routes/users.route";

const app: express.Application = express();
const PORT: number | string = process.env.PORT || 8000;

mongoose.connect(
  `mongodb+srv://mongo:hienhan0901@cluster0.bqt3u.mongodb.net/test?authSource=admin&replicaSet=atlas-10nifr-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
  {
    dbName: "task2",
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", usersRoute);

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
