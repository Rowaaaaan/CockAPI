import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (res: Response) => {
	let data = {
		test: "la mao"
	}
	res.json(data).status(200);
})

app.listen(port, () => {
	console.log(`Server is running http://localhost:${port}`);
})
