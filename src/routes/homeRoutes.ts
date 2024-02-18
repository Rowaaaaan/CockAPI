import { Router, Response, Request } from "express";

const router: Router = Router();

router.get("/", (_: Request, res: Response) => {
	res
		.status(200)
		.json({
			status: 200,
			message: "API is online"
		});
});

export { router as HomeRouter };
