import express, { Request, Response } from "express";

const router: any = express.Router();

router
  .get("/", (req: Request, res: Response) => {
    try {
      res.status(200).json({});
    } catch (e) {
      res.status(500).json(e);
    }
  })
  .put("/", (req: Request, res: Response) => {
    try {
      res.status(200).json({});
    } catch (e) {
      res.status(500).json(e);
    }
  });

export default router;
