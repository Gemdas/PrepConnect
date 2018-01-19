import React from "react";
// import Editor from "../Editor";

// add state for values

const ValidateQuestion = props => (

	<div>
		<form>
  			<div className="form-group">
    			<label for="validationQuestion">Enter your props.skillLevel props.language question below</label>
    			<textarea className="form-control form-control-lg" type="text" id="validationQuestion" value="" rows="3" placeholder="Write a function for FizzBuzz"></textarea>
  			</div>
		</form>
	</div>
)

export default ValidateQuestion;