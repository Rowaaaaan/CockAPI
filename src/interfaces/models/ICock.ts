/**
 * Interface for the Cock model
 *
 * @field {Array<String>} imageUrl
 * @field {String} breed
 * @field {Array<String>} names
 * @field {Array<String>} scientificName
 * @field {Number} yearDiscovered
 * @field {String} countryOfOrigin
 * @field {{APA: String, EE: String, }}
 */
export default interface ICock {
	/**
	 * Collection of URLs that point to an image of the cock.
	 *
	 * We want consumers to be able to pull any random image of a cock
	 */
	imageUrl?: Array<String>;

	/**
	 * Breed of cock
	 */
	breed: String;

	/**
	 * Other aliases that the cock goes by.
	 *
	 * Different countries can call the same cock by different names.
	 */
	names: Array<String>;

	/**
	 * Scientific name of cock
	 *
	 * This should probably only be Gallus Gallus Domesticus, but just in case
	 */
	scientificName: String;

	/**
	 * Year cock was discovered
	 *
	 */
	yearDiscovered?: Number;

	/**
	 * Cock country of origin
	 *
	 */
	countryOfOrigin: String;

	/**
	 * Classification of cock based on poultry association
	 */
	classification: {
		/** Classification by the American Poultry Association */
		APA?: String,
		/** Classification by the Entente Européenne */
		EE?: String,
		/** Classification by the Poultry Club of Great Britain */
		PCGB?: String
	};

	/**
	 * Conservation status of the cock
	 *
	 * Status of whether the cock still exists and likelihood of extinction
	 */
	conservationStatus?: String;

	/**
	 * Average height of cock
	 */
	averageHeight?: {
		male?: Number,
		female?: Number
	};

	/**
	 * Average weight of cock
	 */
	averageWeight?: {
		male?: Number,
		female?: Number
	};

	/**
	 * Common skin color of cock.
	 */
	skinColor?: Array<String>;

	/**
	 * Common egg color of cock.
	 */
	eggColor?: Array<String>;

	/**
	 * Comb type of cock--the thing on the top of their head
	 */
	combType?: String;

	/**
	 * Description of the cock
	 */
	description: String;

	/**
	 * Sources of information where information about cock was pulled.
	 */
	meta?: {
		sources: Array<String>
	}
}
