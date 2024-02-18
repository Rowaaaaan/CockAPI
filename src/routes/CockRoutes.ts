import { Router } from "express";
import CockControllerImpl from "../controllers/CockControllerImpl";

const router: Router = Router();
const CockController: CockControllerImpl = new CockControllerImpl();

router.post("/", CockController.create);

router.get("/", CockController.findAll);

router.get("/:id", CockController.findById);

router.patch("/:id", CockController.update);

router.delete("/:id", CockController.delete);

export { router as CockRouter };
