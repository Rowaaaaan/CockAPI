import { Request, Response } from "express";
import IHomeController from "../interfaces/controllers/IHomeController";

export default class HomeControllerImpl implements IHomeController {
	public async getHealthCheck(_: Request, res: Response) {
		res
			.status(200)
			.json({
				message: "Ok",
				uptime: process.uptime(),
				date: new Date()
			});
	}
}
