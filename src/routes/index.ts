import { Router } from "express";
import { AUTHROUTES } from "./auth";

export const router = Router();

router.use("/auth", AUTHROUTES);
