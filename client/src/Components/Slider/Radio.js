import React from "react";
import "./RadioSkill.css"

const RadioSkill = props => (

	<form className="skill">
		<div className="input-group">
			<h2>{props.skill}</h2>
			<label className="radio-inline"><input type="radio" name="skill-" value={0} checked />N/A</label>
			<label className="radio-inline"><input type="radio" name="skill-" value={1}/>Beginner</label>
			<label className="radio-inline"><input type="radio" name="skill-" value={2}/>Intermediate</label>
			<label className="radio-inline"><input type="radio" name="skill-" value={3}/>Advanced</label>
		</div>
	</form>

)

export default RadioSkill;

// handleSubmit function on each page to save data/update state