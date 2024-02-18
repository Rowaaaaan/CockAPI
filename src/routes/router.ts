import Router from "express";
import { HomeRouter } from "./HomeRoutes";
import { CockRouter } from "./CockRoutes";

const apiVersion: Number = 1;
const baseApiUri: string = `/api/v${apiVersion}`;

const router = Router();

router.use(baseApiUri, HomeRouter);

router.use(`${baseApiUri}/cocks`, CockRouter);

export default router;
