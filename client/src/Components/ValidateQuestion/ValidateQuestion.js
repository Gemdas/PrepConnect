import React from "react";
// import Editor from "../Editor";

// add state for values

const ValidateQuestion = props => (

	<div>
			
  			<div className="form-group">
    			<label htmlFor="validationQuestion">Enter a custom questoin to verify applicant's skill level</label>
    			<textarea className="form-control form-control-md formBox" type="text" onChange={props.question} id={props.id} rows="3"></textarea>
  			</div>
  			
		
	</div>
)

export default ValidateQuestion;