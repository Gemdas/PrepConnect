import React from 'react';

// This page holds the upvote and downvote component
// Still needs work on: 
// stopping increment/decrement after 1 click
// change color of thumb from orange to blue on click to show clicked.

class VotingBtn extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
		upvote: 0,
		downvote: 0
		};
	}

		handleIncrement = event => {
			this.setState({upvote: this.state.upvote + 1});

		};

		handleDecrement = event => {
			this.setState({downvote: this.state.downvote - 1});
		};

	render() {
		return (
			<div className="row">
				<div className="col-sm-3">
					<i className="fa fa-thumbs-up" onClick={this.handleIncrement.bind(this)} style={{fontSize: '24px', color: '#FF7E67'}}></i>
					<br />
					<small>{this.state.upvote}</small>
				</div>
				<div className="col-sm-3">
					<i className="fa fa-thumbs-down" onClick={this.handleDecrement.bind(this)} style={{fontSize: '24px', color: '#FF7E67'}}></i>
					<br />
					<small>{this.state.downvote}</small>
				</div>
			</div>
		)
	}

}

export default VotingBtn;