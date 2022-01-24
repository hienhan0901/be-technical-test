import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token: string = <string>req.headers.access_token;

    if (!token) throw { message: "Token missing" };
    if (token !== "token123") throw { message: "Token invalid" };

    next();
  } catch (e) {
    res.status(500).json(e);
  }
};
