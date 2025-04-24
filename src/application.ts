import express, { Express } from "express";

// Configurations
const application: Express = express();

// Middlewares
application.use(express.json());

export default application;
