import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { JavascriptEditor } from "../../Components/Editor";
import { Timer } from "../../Components/Timer";


// questions from recruiter with editors for each
// submit button that grabs values for each editor 
// for each question in a job application, add an AppQuestion component

// Question Type
// Question
// Editor



export default withAuth(class Application extends Component {
	constructor(props){
		super(props)

		this.state = {
			input: '',
			authenticated: null,
			user: null
		}
		this.checkAuthentication = this.checkAuthentication.bind(this);
		this.getCurrentUser = this.getCurrentUser.bind(this);
		this.checkAuthentication();
	};

	  async getCurrentUser(){
		this.props.auth.getUser()
		  .then(user => this.setState({user}));
	  }
	
	  async checkAuthentication() {
		const authenticated = await this.props.auth.isAuthenticated();
		if (authenticated !== this.state.authenticated) {
		  this.setState({ authenticated });
		}
	  }

	  componentDidMount(){
		this.getCurrentUser();
	  }
	
	  componentDidUpdate() {
		this.checkAuthentication();
	  }

	handleEditorInput = (editorInput) => {
		console.log('parent...', editorInput)
		this.props.handleEditor(editorInput, this.props.index);
		this.setState({
			input: editorInput
		})
	}
// Still need to grab the editor data on submit
	handleSubmit = event => {
		event.preventDefault();
		const data={
			user: this.state.user,
		}
		console.log(data);
	}


	render () {
		if(!this.state.user) return null;
		if (this.state.authenticated === null) return null;
		const authNav = this.state.authenticated;
		return (
			<div>
				<div>
					<Timer />
				</div>
				<div className="questionType">
					<h2>{this.props.skills}</h2>
				</div>
				<div className="question">
					<h3>{this.props.skillsq}</h3>
				</div>
					<JavascriptEditor value={this.state.input} handleEditorInput={this.handleEditorInput} />
				
			</div>
		)
	}
})

