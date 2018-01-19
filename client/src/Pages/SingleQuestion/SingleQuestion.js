 import React, { Component } from 'react';
 import PrepQuestion from "../../Components/PrepQuestion";
 import VotingBtn from "../../Components/VotingBtn";
 import "./SingleQuestion.css";

 class SingleQuestion extends Component {
 	render () {
 		return (
	 		<div>
	 			<h2 className="question-header">
	 				ajax call to get question with id from params
	 			</h2>
	 			<div className="answers">
	 				<VotingBtn className="votingBtn" />
	 				ajax  call to get # of votes and all answers, sorted in order of upvotes
	 			</div>
			</div>
 		)
 	}
 }

 export default SingleQuestion;