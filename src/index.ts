import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { CockRouter } from "./routes/cockRoutes";
import { HomeRouter } from "./routes/homeRoutes";

dotenv.config();

const dbUri: string = process.env.ATLAS_URL || "";

const apiVersion: Number = 1;

const baseApiUri: string = `/api/v${apiVersion}`;

main()
	.catch(err => {
		console.error(err);
	});

async function main() {

	console.log(`Connecting to ${dbUri}`);

	await mongoose
		.connect(dbUri)
		.then(() => {
			console.log("Connected to mongodb successfully")
		});

	const app: Express = express();
	app.use(express.json());

	const port = process.env.PORT || 3000;

	app.use(baseApiUri, HomeRouter);

	app.use(`${baseApiUri}/cocks`, CockRouter);

	app.listen(port, () => {
		console.log(`Server is running http://localhost:${port}`);
	});
}
