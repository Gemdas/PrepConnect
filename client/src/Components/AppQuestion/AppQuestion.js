import React from "react";
import { HtmlEditor } from "../Editor";

// add state for values

const AppQuestion = props => (

	<div>
		<div className="appQuestion">
			{props.question}
		</div>
		<HtmlEditor />
	</div>

)

export default AppQuestion;