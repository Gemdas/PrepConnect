const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
	language: String,
	compentency: Number
});

const QuestionSchema = new Schema({
	question: String,
	type: String
});

const PostingSchema = new Schema({
	jobTitle : {type: String, required: true},
	company : {type: String, required: true},
	authorId : Schema.Types.ObjectId,
	codeRequirements:[SkillSchema],
	compatibilityExpectation: {type:Number, required: true},
	questions:[QuestionSchema]
})

module.exports=mongoose.model("Posting", PostingSchema);