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
	company : {type: String, required: true},
	companyURL : {type: String, required: true},
	salary : {type: Number, required: true},
	recruiterId : Schema.Types.ObjectId,
	codeRequirements:[SkillSchema],
	compatibilityExpectation: {type:Number, required: true},
	questions:[QuestionSchema]
})

module.exports=mongoose.model("Posting", PostingSchema);