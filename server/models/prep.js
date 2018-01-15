const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
	answer: {type: String, required: true},
	score: {type: Number, default: 0}
});

const PrepSchema = new Schema({
	question: {type: String, required: true},
	type: {type: String, required: true},
	cometency: {type: Number, required: true},,
	answers: [AnswerSchema]
})

module.exports = mongoose.model("Prep", PrepSchema);