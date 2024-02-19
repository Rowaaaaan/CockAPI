import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./routes/router";

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const dbUri: string = process.env.DB_URL || "";
const port = process.env.PORT || 3000;

main()
	.catch(err => {
		console.error(err);
	});

async function main() {

	const app: Express = express();
	app.use(express.json());
	app.use(express.static("src/public"));

	app.use(router);

	app.listen(port, () => {
		console.log(`Server is running http://localhost:${port}`);
	});

	console.log(`Connecting to ${dbUri}`);

	await mongoose
		.connect(dbUri)
		.then(() => {
			console.log("Connected to mongodb successfully")
		});
}
