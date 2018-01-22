import React from "react";
// import Editor from "../Editor";

// add state for values

const ValidateQuestion = props => (

	<div>
		
  			<div className="form-group">
    			<label htmlFor="validationQuestion">Enter your props.skillLevel props.language question below</label>
    			<textarea className="form-control form-control-lg" type="text" onChange={props.question} id={props.id} rows="3" placeholder="Write a function for FizzBuzz"></textarea>
  			</div>
		
	</div>
)

export default ValidateQuestion;