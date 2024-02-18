import { Router } from "express";
import CockControllerImpl from "../controllers/cockControllerImpl";

const router: Router = Router();
const cockController: CockControllerImpl = new CockControllerImpl();

router.post("/", cockController.create);

router.get("/", cockController.findAll);

router.get("/:id", cockController.findById);

router.patch("/:id", cockController.update);

router.delete("/:id", cockController.delete);

export { router as CockRouter };
