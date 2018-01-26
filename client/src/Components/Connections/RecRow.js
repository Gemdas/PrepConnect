 import React, { Component } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';


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

	handleDecline = () =>{
		const data = {
			jobTitle : this.props.jobTitle,
			email : this.props.email
		}
		axios.post("email/", data).then((response)=>{
 			axios.delete("api/submission/"+this.props.id).then((response)=>{});
 		});
 		
	}


	render() {
		const modalStyles = {overlay: {zIndex: 10}};
		return(
				<tr>
			      <th scope="row">{this.props.name}</th>
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
				     {this.props.responses.map(response=>{
				     	return(
				     		<div>
				     		<div className="question"><h3>Question:</h3>{response.question} </div>
				     		<div className="answer"><h4>Answer:</h4>{response.answer} </div>
				     		</div>
				     		)
				     })} 	
			      	<button onClick={this.HandleCloseModal}>Exit Application</button>
			      	</ReactModal>

			      </td>
			      <td><a href={"mailto:"+this.props.email}><button className="btn btn-success tableBtn">Contact</button></a></td>
			      <td><button className="btn btn-danger tableBtn" onClick={this.handleDecline}>Decline</button></td>
			    </tr>
			)
	}
}

