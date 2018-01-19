import React from "react";
import htmlEditor from "../Editor";

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