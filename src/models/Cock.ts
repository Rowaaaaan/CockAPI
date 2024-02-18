import { Schema, model } from "mongoose";
import ICock from "../interfaces/models/ICock";

const cockSchema: Schema = new Schema<ICock>(
	{
		imageUrl: Array<String>,
		breed: {
			type: String,
			required: true
		},
		names: {
			type: [String],
			required: true
		},
		scientificName: {
			type: String,
			required: true
		},
		classification: {
			APA: String,
			EE: String,
			PCGB: String
		},
		yearDiscovered: Number,
		countryOfOrigin: {
			type: String,
			required: true
		},
		conservationStatus: String,
		averageHeight: {
			male: Number,
			female: Number
		},
		averageWeight: {
			male: Number,
			female: Number
		},
		skinColor: Array<String>,
		eggColor: Array<String>,
		combType: String,
		description: {
			type: String,
			required: true
		},
		meta: {
			type: {
				sources: Array<String>
			},
			default: {
				sources: [""]
			}
		},
	},
	{
		timestamps: true
	}
);

export default model<ICock>("Cock", cockSchema);
