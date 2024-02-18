import { Request, Response } from "express";

export default interface IHomeController {
	getHealthCheck(req: Request, res: Response): Promise<void>;
}
