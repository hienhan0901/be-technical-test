import { Request, Response } from "express";
import userModel, { IUser } from "../models/users.model";

export const queryUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await userModel.find({
      $or: [
        {
          username: { $regex: req.query.search, $options: "i" },
        },
        {
          email: { $regex: req.query.search, $options: "i" },
        },
      ],
    });

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = req.body;

    users.forEach(async (u) => {
      if (!u.username || !u.email || !u.birthday) {
        throw { errorMessage: "Missing information" };
      }

      await userModel.updateOne(
        { _id: u._id },
        { $set: { username: u.username, email: u.email, birthday: u.birthday } }
      );
    });

    res.status(200).json({ message: "success" });
  } catch (e) {
    res.status(500).json(e);
  }
};
