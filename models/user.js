const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
	language: String,
	competency: String
});
const UserSchema = new Schema({
	// firstName: {type: String, required: true},
	// lastName: {type: String, required: true},
	// email: {type: String, required: true},
	// password:{type: String, minlength: 8, required:true},
	// isRecruiter:{type: Boolean, default: false},
	// github: String,
	// linkedin: String,
	// portfolio: String,
	codeAbility:[SkillSchema],
	interactedPostings: [Schema.Types.ObjectId] 
});
module.exports = mongoose.model("User", UserSchema);