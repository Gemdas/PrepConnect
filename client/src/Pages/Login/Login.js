import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './login.css';

// This file holds the landing/login componenent
// Still have to work on the Create Account

class Login extends Component {

  
    state = { 
      checkboxChecked: false, 
      email: "", 
      password: ""
    };
    
    // this.handleChange = this.handleChange.bind(this);

    handleChange = event => {
      const { value } = event.target;

      if (this.state.checkboxChecked) {
        this.setState({
          checkboxChecked: false
        })
      } else {
        this.setState({
          checkboxChecked: true
        })
      }
    }
    
    handleSubmit = event => {
      event.preventDefault();
    }
    
    handleCreateAccount = event => {
      event.preventDefault();
    }

  render() {
    return (
      <div className="wrapper loginBackground">
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
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password}/>
              </div>
              <div className="form-check recruiterCheck">
                <input className="form-check-input" type="checkbox" value="" id="role" checked={this.state.checkboxChecked} onChange={this.handleChange}/>
                <label className="form-check-label" htmlFor="role">
                  Recruiter
                </label>
              </div>
                <div className="row">
                    <div className="col-sm-6">
                    <Link to="/dashboard">
                      <button type="submit" className="btn btn-outline" onSubmit={this.handleSubmit}>Submit</button>
                    </Link>
                    </div>
                    <div className="col-sm-6">
                      <button type="submit" className="btn btn-outline" onSubmit={this.handleCreateAccount}>Create an account</button>
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