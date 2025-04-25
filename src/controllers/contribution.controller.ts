import contributors from "../../Contributors/index.json";
import { Request, Response } from "express";

export function listContributors(request: Request, response: Response) {
  response.render("contributors", { contributors });
}
