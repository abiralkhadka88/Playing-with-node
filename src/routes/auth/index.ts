import { Router } from "express";
import * as authControllers from "./controller";
import { isAuthenticated } from "../../middleware/auth.middleware";

export const AUTHROUTES = Router();

AUTHROUTES.get("/users", isAuthenticated, authControllers.getUser);
AUTHROUTES.post("/user-login-session", authControllers.login);
AUTHROUTES.delete("/logout", isAuthenticated, authControllers.logout);
