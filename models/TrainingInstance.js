const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainingInstanceSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	__organization: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Organization',
		required: true
	},
	__creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	date: {
		type: Date,
		default: Date.now
	},
	trainingCode: {
		type: String
	},
	hours: {
		type: Number,
		default: 0
	},
	recurring: {
		type: Boolean,
		default: false
	},
	frequencyNumber: {
		type: Number
	},
	frequencyPeriod: {
		type: String
	},
/*
	documents: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Document',
	}
*/
});

const TrainingInstance = mongoose.model('TrainingInstance', TrainingInstanceSchema);

module.exports = TrainingInstance;