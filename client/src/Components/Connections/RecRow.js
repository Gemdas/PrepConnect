 import React, { Component } from 'react';
import ReactModal from 'react-modal';

// Props.Action should show a modal displaying jobSeeker answers, and links to their github, linkedin, portfolio

export class RecRow extends React.Component {

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

	render() {
		const modalStyles = {overlay: {zIndex: 10}};
		return(
				<tr>
			      <th scope="row">props.username</th>
			      <td>{this.props.jobTitle}</td>
			      <td>{this.props.company}</td>
			      <td>
			      	<button onClick={this.handleOpenModal} className="btn btn-primary tableBtn">View Application</button>

			      	<ReactModal
				      		isOpen={this.state.showModal}
				      		conentLabel="Show Application"
				      		onRequestClose={this.handleCloseModal}
				            shouldCloseOnOverlayClick={false}
				            style={ modalStyles }
				     >
				      	
			      	<button onClick={this.HandleCloseModal}>Exit Application</button>
			      	</ReactModal>

			      </td>
			      <td>{this.props.matched}</td>
			      <td><button className="btn btn-success tableBtn" hfref="mailto:props.userEmail">Contact</button></td>
			      <td><button className="btn btn-danger tableBtn">Decline</button></td>
			    </tr>
			)
	}
}

