import React, { Component } from 'react';
import { JavascriptEditor } from "../../Components/Editor";


// questions from recruiter with editors for each
// submit button that grabs values for each editor 
// for each question in a job application, add an AppQuestion component

// Question Type
// Question
// Editor



class Application extends Component {
	constructor(props){
		super(props)


	};

	state = {
		input: ''
	}

	handleSubmit = event => {
		event.preventDefault();
	}

	handleEditorInput = (editorInput) => {
		console.log('parent...', editorInput)
		this.setState({
			input: editorInput
		})
	}


	render () {
		return (
			<div>
				<div className="questionType">
					<h2>{this.props.skills}</h2>
				</div>
				<div className="question">
					<h3>{this.props.skillsq}</h3>
				</div>
					<JavascriptEditor value={this.state.input} handleEditorInput={this.handleEditorInput} />
				<button type="submit" className="btn btn-sucess submitBtn" onClick={this.handleSubmit}>Submit Application</button>
			</div>
		)
	}
}

export default Application;