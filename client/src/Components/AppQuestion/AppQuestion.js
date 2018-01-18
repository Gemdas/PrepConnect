import React from "react";
import Editor from "../Editor";

// add state for values

const AppQuestion = props => (

	<div>
		<div className="appQuestion">
			{props.question}
		</div>
		<Editor mode={props.language}/>
	</div>

)

export default AppQuestion;