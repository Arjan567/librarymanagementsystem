import dotenv from "dotenv";
dotenv.config();

import express from "express";
import config from "config";

import logger from "./utils/logger.js";

import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router);

const port = config.get("port");

app.listen(port, async () => {
  logger.info(`App is running on port ${port}`);
});
