const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
	language: String,
	compentency: Number
});

const QuestionSchema = new Schema({
	question: String,
	answer: String
});

const SubmissionSchema = new Schema({
		recruiterId : {type: Schema.Types.ObjectId, required: true},
		postingId : {type: Schema.Types.ObjectId, required: true},
		applicantId : {type: Schema.Types.ObjectId, required: true},
		applicant: {type: String, required: true},
		codeAbility:[SkillSchema],
		compatibilityScore: {type: Number, required: true},
		respones:[QuestionSchema]
})

module.exports = mongoose.model("Submission", SubmissionSchema);