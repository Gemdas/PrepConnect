import React from "react";

// ajax call to pull questions and top answers
// style button
// style dropdown menus

const PrepQuestion = props => (

	<div>
		<div className="question">
			{props.question}
		</div>
		<p className="topaAswer">{props.answer}</p>
		<a class="btn btn-primary" href={"/dashboard/prep/" + props.questionId} role="button">View Answers</a>
	</div>

)

export default PrepQuestion;