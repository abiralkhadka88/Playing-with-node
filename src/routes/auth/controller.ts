import { Request, Response, NextFunction } from "express";

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  return res.json({ result: "success" });
};

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body; // Assuming user details in body

  // Perform authentication logic here (e.g., check against a database)
  // ...

  req.session.user = { username, password };
  console.log("controller login session", req.session.user);
  res.json({ message: "User details stored in session" });
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  console.log("logging out");
  await req.session.destroy((err) => {
    if (err) {
      console.log("Error loggoing out");
    } else {
      res.send({ result: "Logout successful" });
    }
  });
};
