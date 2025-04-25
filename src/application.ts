import express, { Express } from "express";
import path from "path";
import contributionRouter from "./routes/contribution.route";

// Application Configurations
const application: Express = express();

// Express Configurations
application.set("view engine", "ejs");
application.set("views", path.join(__dirname, "views"));
application.use(express.static(path.join(__dirname, "assets")));

// Middlewares
application.use(express.json());

// Routes
application.use("/", contributionRouter);

// Export Express Application To The Server File
export default application;
