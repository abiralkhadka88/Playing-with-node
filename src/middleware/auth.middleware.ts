import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.session);
  if (req.session && req.session.user) {
    // Session exists and user is authenticated
    console.log("session", req.session);
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
