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
	

	render () {
		const modalStyles = {overlay: {zIndex: 10}};
		return (
				<tr>
			      <td scope="row">{this.props.jobTitle}</td>
			      <td>{this.props.salary}</td>
			      <td><a>{this.props.company}</a></td>
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
				      	<Application skills="JavaScript" skillsq="FizzBuzz" />
				      	<button onClick={this.HandleCloseModal}>Exit Application</button>
				      	
				      	</ReactModal>
				      	
			     
			      </td>
			      
			      <td><button className="btn btn-danger tableBtn">Decline</button></td>
			    </tr>
		)
	}
}


