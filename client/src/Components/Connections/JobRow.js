 import React from 'react';
 import ReactModal from 'react-modal';

 export class JobRow extends React.Component {
 	constructor (props) {
 		super (props)

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
 		return(
 			<tr>
		      <td>{this.props.jobTitle}</td>
		      <td>{this.props.company}</td>
		      <td>{this.props.allMatches}</td>
		      <td>
		      	<button onClick={this.handleOpenModal} className="btn btn-primary tableBtn">Action</button>

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
		    </tr>
 		)
 	}
 };