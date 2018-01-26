import React from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch, Link } from "react-router-dom";
import ReactModal from 'react-modal';
import { JavascriptEditor } from '../Editor';
import Application from '../../Pages/Application';


export class JsRow extends React.Component {
	constructor(props){
		super(props)
		console.log(props);

		this.state = {
			showModal: false,
			
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.HandleCloseModal = this.HandleCloseModal.bind(this);
	};

	handleOpenModal = event => {
		this.setState({ showModal: true });
	};

	HandleCloseModal = event => {
		this.setState({ showModal: false });
	};
	
	handleSubmit = event => {
		event.preventDefault();
		const data={
			user: this.state.user,
		}
		console.log(data);
	}

	render () {
		const modalStyles = {overlay: {zIndex: 10}};
		return (
				<tr>
			      <td scope="row">{this.props.jobTitle}</td>
			      <td>{this.props.salary}</td>
			      <td><a href={this.props.companyUrl}>{this.props.company}</a></td>
			      <td>{this.props.matched}</td>
			      <td>
			     
				      	<button onClick={this.handleOpenModal} className="btn btn-primary tableBtn" id="application">Application</button>
				      	
				      	<ReactModal
				      		isOpen={this.state.showModal}
				      		conentLabel="Show Application"
				      		onRequestClose={this.handleCloseModal}
				            shouldCloseOnOverlayClick={false}
				            style={ modalStyles }
				      	>
				      	{this.props.question.map(question=>{
					      	return (<Application skills={question.type} skillsq={question.question} />);

				      	})}
				      	<Application skills="JavaScript" skillsq="FizzBuzz" />
				      	<button type="submit" className="btn btn-sucess submitBtn" onClick={this.handleSubmit}>Submit Application</button>
				      	<button className="submitBtn"onClick={this.HandleCloseModal}>Exit Application</button>
				      	
				      	</ReactModal>
				      	
			     
			      </td>
			      
			      <td><button className="btn btn-danger tableBtn">Decline</button></td>
			    </tr>
		)
	}
}


