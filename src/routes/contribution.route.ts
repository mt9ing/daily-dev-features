import { Router, IRouter } from "express";
import { listContributors } from "../controllers/contribution.controller";

const router: IRouter = Router();

router.get("/contributors", listContributors);

export default router;
