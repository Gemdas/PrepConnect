import React from "react";

const SubmitBtn = props => (
	<button
        className="btn btn-success submitBtn"
        onClick={props.handleSubmit}
        >{props.label}</button>
)

export default SubmitBtn;

// handleSubmit function on each page to save data/update state