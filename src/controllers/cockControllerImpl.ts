import { Response, Request } from "express";
import mongoose, { FlattenMaps, HydratedDocument } from "mongoose";
import Cock from "../models/cockModel";
import ICock from "../interfaces/cockInterface";
import ICockController from "./ICockController";

export default class CockControllerImpl implements ICockController {

	public async create(req: Request, res: Response): Promise<void> {
		try {
			const cock: HydratedDocument<ICock> = await Cock.create(req.body);

			res
				.status(200)
				.json({
					data: cock
				});
		} catch (err: any) {
			res
				.status(500)
				.json({
					message: err.message
				});
		}
	}

	public async findAll(_: Request, res: Response): Promise<void> {
		try {
			const allCocks: Array<HydratedDocument<ICock>> = await Cock.find({});

			res
				.status(200)
				.json(allCocks);
		} catch (err: any) {
			res
				.status(500)
				.json({
					message: err.message
				});
		}
	}

	public async findById(req: Request, res: Response): Promise<void> {
		try {
			const { id }: { id?: string } = req.params;

			if (!mongoose.Types.ObjectId.isValid(id)) {
				throw new Error(`Invalid object id ${id}. ID must be a valid BSON ID.`);
			}

			const cock: HydratedDocument<ICock> | null = await Cock.findById(id);

			if (!cock) {
				res
					.status(400)
					.json({
						message: `Cock id ${id} not found`
					})
			} else {
				res
					.status(200)
					.json({
						message: "Success",
						data: cock
					});
			}
		} catch (err: any) {
			console.error(err.message)
			res
				.status(500)
				.json({
					message: err.message
				})
		}
	}

	public async update(req: Request, res: Response): Promise<void> {
		try {
			const id: String = req.params.id;

			const updatedCock: HydratedDocument<ICock> | null = await Cock.findByIdAndUpdate(id, req.body);

			if (!updatedCock) {
				res
					.status(400)
					.json({
						message: `Cock id ${id} not found`
					});
			} else {
				res
					.status(200)
					.json(updatedCock);
			}
		} catch (err: any) {
			res
				.status(500)
				.json({
					message: err.message
				});
		}
	}

	public async delete(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;

			if (mongoose.Types.ObjectId.isValid(id)) {
				throw Error(`Invalid object id ${id}`);
			}

			const deletedCock: FlattenMaps<ICock> | null = await Cock.findByIdAndDelete(id, req.body);

			if (!deletedCock) {
				res
					.status(400)
					.json({
						message: `Cock id ${id} not found`
					});
			} else {
				res
					.status(200)
					.json({
						message: `Cock id ${id} deleted`,
						data: deletedCock
					})
			}
		} catch (err: any) {
			res
				.status(500)
				.json({
					message: err.message
				});
		}
	}
}
