 import React, { Component } from 'react';
 import "./Prep.css";

 // This page holds the table that shows each job seeker/recruiter their "matches" based on survey score
 // Props needed: Table Headers for Recruiters and Job Seekers

 class Prep extends Component {
 	render () {
 		return (
 		<div>
 			<div className="form-group">
			    <label for="prepTopic" className="topic">Topic</label>
			    <select className="form-control studyTopics" id="prepTopic">
			      <option id="htmlPrep" value="html">HTML</option>
			      <option id="cssPrep" value="css">CSS</option>
			      <option id="javascriptPrep" value="javascript">JavaScript</option>
			      <option id="jqueryPrep" value="jquery">jQuery</option>
			      <option id="mysqlPrep" value="mysql">MySQL</option>
			      <option id="mongodbPrep" value="mongodb">MongoDB</option>
			      <option id="reactPrep" value="react">React</option>
			    </select>
			 </div>
		 </div>
 		)
 	}
 }

 export default Prep;