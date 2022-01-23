import express, { Request, Response } from "express";

import usersRoute from "./routes/users.route";

const app: express.Application = express();
const PORT: number | string = process.env.PORT || 8000;

app.use("/api/users", usersRoute);

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
