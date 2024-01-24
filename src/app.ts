import express from "express";
import { EnvConfigurations } from "./config/env.config";
import bodyParser from "body-parser";
import { router } from "./routes";
import cors from "cors";

const session = require("express-session");
declare module "express-session" {
  export interface Session {
    user: {
      username: string;
      password: string;
    };
  }
}
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
// app.set("trust proxy", 1);
app.use(
  session({
    secret: EnvConfigurations.SESSION_SECRET_KEY, // Change this to a secure secret key
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 50 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.use("/api/v1", router);
app.listen(EnvConfigurations.PORT, () => {
  console.log(`Server started at port ${EnvConfigurations.PORT}`);
});
