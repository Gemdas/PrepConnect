 import React, { Component } from 'react';
 import "./Prep.css";
 import VotingBtn from "../../Components/VotingBtn";

 // This page holds the table that shows each job seeker/recruiter their "matches" based on survey score
 // Props needed: Table Headers for Recruiters and Job Seekers
 // ADD COMPETENCY LEVEL DROPDOWN 

 class Prep extends Component {
 	render () {
 		return (
 		<div>
 			<div className="row">
 				<div className="col-sm-3"></div>
 				<div className="col-sm-3">
	 				<div className="form-group">
					    <label for="prepTopic" className="topic prepDropdown">Topic</label>
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
		 		<div className="col-sm-3">
		 			<div className="form-group">
					    <label for="studySkillLevel" className="studySkillLevel prepDropdown">Skill Level</label>
					    <select className="form-control skillLevels" id="studySkillLevel">
					      <option id="beginner" value="1">Beginner</option>
					      <option id="intermediate" value="2">Intermediate</option>
					      <option id="advanced" value="3">Advanced</option>
					    </select>
					 </div>
		 		</div>
		 		<div className="col-sm-3"></div>
			</div>
		</div>
 		)
 	}
 }

 export default Prep;