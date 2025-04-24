import application from "./src/application";
import { Response, Request } from "express";

const PORT: number = Number(process.env.SERVER_PORT) || 3000;

application.get("/status", (request: Request, response: Response) => {
  response
    .status(200)
    .json({ status: "Working!", message: "No Errors Currently!" });
});

application.listen(PORT, () => {
  console.log(
    `Server Running on: http://localhost:${PORT} - "You can check server status by visiting {/status}".`
  );
});
