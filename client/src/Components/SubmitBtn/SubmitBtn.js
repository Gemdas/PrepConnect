import React from "react";

// handleSubmit function on each page to save data/update state

class SubmitBtn extends React.Component {


        state = {
		skills: []
	}

	handleSubmit = event => {
		event.preventDefault();
		// push radio values into an array
		console.log("handle submit working");
		const HTML = document.getElementsByClassName("HTML");
		this.state.skills.push(HTML);
		console.log("Skills array" + this.state.skills);
        }
        
        render() {
                return(
                        <button
                                className="btn btn-success submitBtn"
                                onClick={this.props.handleSubmit}
                        >{this.props.label}</button>
                )
        }
        
}

export default SubmitBtn;

