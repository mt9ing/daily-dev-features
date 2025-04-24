import application from "./src/application";
import { Response, Request } from "express";
import "dotenv/config";

const PORT: number = Number(process.env.SERVER_PORT) || 3000;
const HOST: string = process.env.SERVER_HOST || "localhost";

application.get("/status", (request: Request, response: Response) => {
  response
    .status(200)
    .json({ status: "Working!", message: "No Errors Currently!" });
});

application.listen(PORT, () =>
  console.log(
    `Server Running on: http://${HOST}:${PORT} - "You can check server status by visiting {/status}".`
  )
);
