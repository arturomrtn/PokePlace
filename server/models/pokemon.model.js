const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		typle: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		imageUrl: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);


const Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon