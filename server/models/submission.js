const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	question: String,
	answer: String
});

const SubmissionSchema = new Schema({
	recruiterId : {type: Schema.Types.ObjectId, required: true},
	postingId : {type: Schema.Types.ObjectId, required: true},
	applicant: {type: String, required: true},
	email: {type: String, required: true},
	github: String,
	linkedin: String,
	portfolio: String,
	responses:[QuestionSchema]
})

module.exports = mongoose.model("Submission", SubmissionSchema);