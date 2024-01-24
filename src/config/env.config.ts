import dotenv from "dotenv";
dotenv.config();

class EnvConfigurations {
  static PORT = process.env.PORT || 3000;
  static SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY || "HELLO";
}

export { EnvConfigurations };
