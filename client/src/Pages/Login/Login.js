import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './login.css';

// This file holds the landing/login componenent
// Still have to work on the Create Account

class Login extends Component {
  render() {
    return (
      <div className="wrapper" data-color="blue" data-image="http://images.all-free-download.com/images/graphiclarge/seamless_network_background_312309.jpg">
          <div className="card-body row align-items-center">
          
            <div className="col-sm-6 loginForm">
            <div className="card-header">
              <h1 className="card-title">Welcome to PrepConnect</h1>
              <h3 className="card-subtitle mb-2 text-muted">Nail the Interview!</h3>
              <h4 className="card-text">Interviewing made easy. Create an account or log in to review actual interview questions, or initiate an interview for a job matching your skill!</h4>              
            </div>
            <br />
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
                <div className="row">
                    <div className="col-sm-6">
                    <Link to="/dashboard">
                      <button type="submit" className="btn btn-outline">Submit</button>
                    </Link>
                    </div>
                    <div className="col-sm-6">
                      <button type="submit" className="btn btn-outline">Create an account</button>
                    </div>
                </div>
            </form>
            </div>

          </div>
      </div>
    );
  }
}

export default Login;