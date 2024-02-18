import { Router } from "express";
import HomeControllerImpl from "../controllers/HomeControllerImpl";

const router: Router = Router();
const homeController: HomeControllerImpl = new HomeControllerImpl();

router.get("/health", homeController.getHealthCheck);

export { router as HomeRouter };
