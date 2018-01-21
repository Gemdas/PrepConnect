const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
	language: String,
	competency: Number
});

const QuestionSchema = new Schema({
	question: String,
	type: String
});

const PostingSchema = new Schema({
	jobTitle : {type: String, required: true},
	companyName : {type: String, required: true},
	companyUrl : {type: String, required: true},
	salary : {type: String, required: true},
	compatibilityExpectation: {type:Number, required: true},
	recruiterId : Schema.Types.ObjectId,
	codeRequirements:[SkillSchema],
	questions:[QuestionSchema]
})

module.exports=mongoose.model("Posting", PostingSchema);