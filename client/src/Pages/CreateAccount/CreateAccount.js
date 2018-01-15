import React, { Component } from 'react';
import './App.css';

// This page holds the Create Account Component

class CreateAccount extends Component {
	render () {
		return (
		<div className="CreateAccount">
	        <div className="wrapper">
	            <div className="card-body row justify-content-center">
	              <div className="col-sm-6 loginForm">
	              <div className="card-header">
	                <h1 className="card-title">Create an Account</h1>             
	              </div>
	             <br />
	              <form>
	              <div className="row">
	              	<div className="col-sm-6">
		              	<div className="form-group">
		                  <label className="" htmlFor="firstName">First Name</label>
		                  <input type="email" className="form-control" id="firtsName" aria-describedby="emailHelp" placeholder="Enter email" />
		                </div>
	                </div>
	                <div className="col-sm-6">
		                <div className="form-group">
		                  <label className="" htmlFor="LastName">Last Name</label>
		                  <input type="email" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter email" />
		                </div>
		            </div>
	              </div>
	                <div className="form-group">
	                  <label className="" htmlFor="exampleInputEmail1">Email address</label>
	                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
	                </div>
	                <div className="form-group">
	                  <label htmlFor="exampleInputPassword1">Password</label>
	                  <input type="password" className="form-control" id="password" placeholder="Password" />
	                </div>
	                <div className="form-group">
	                  <label htmlFor="exampleInputPassword1">Confirm Password</label>
	                  <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
	                </div>
	                  <div className="row">
	                      <div className="col-sm-6">
	                        <button type="submit" className="btn btn-outline">Create an account</button>
	                      </div>
	                  </div>
	              </form>
	              </div>
	            </div>
	        </div>
      	</div>
		)
	}
}

export default CreateAccount;