import { Response, Request } from "express";

export default interface ICockController {
	/**
	 * Create a cock
	 *
	 * @param {Request} req request object sent by user
	 * @param {Response} res response object to be sent back to user
	 */
	create(req: Request, res: Response): Promise<void>;

	/**
	 * Find all cocks
	 *
	 * @param {Request} req request object sent by user
	 * @param {Response} res response object to be sent back to user
	 */
	findAll(req: Request, res: Response): Promise<void>;

	/**
	 * Find cock by its object ID.
	 *
	 * Object IDs can be obtained by running findAll.
	 *
	 * @param {Request} req request object sent by user
	 * @param {Response} res response object to be sent back to user
	 */
	findById(req: Request, res: Response): Promise<void>;

	/**
	 * Create a cock
	 *
	 * @param {Request} req request object sent by user
	 * @param {Response} res response object to be sent back to user
	 */
	update(req: Request, res: Response): Promise<void>;

	/**
	 * Delete a cock
	 *
	 * @param {Request} req request object sent by user
	 * @param {Response} res response object to be sent back to user
	 */
	delete(req: Request, res: Response): Promise<void>;
}
