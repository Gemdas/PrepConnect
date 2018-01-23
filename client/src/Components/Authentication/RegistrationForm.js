import React from 'react'; 
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import "../../App.css";
import config from '../../app.config';

export default withAuth(class RegistrationForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userId: '',
      recruiter: false,
      sessionToken: null
    };
    this.oktaAuth = new OktaAuth({ url: config.url });
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);   
    this.handleRecruiterChange = this.handleRecruiterChange.bind(this);   
  }

  async checkAuthentication() {
    const sessionToken = await this.props.auth.getIdToken();
    if (sessionToken) {
      this.setState({ sessionToken });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleFirstNameChange(e){
    this.setState({firstName:e.target.value});
  }
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleRecruiterChange(e) {
    this.setState({recruiter: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();

    fetch("api/user", {
      method: "POST", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: "{}"
    }).then(data => data.json())
    .then( data=>{
      const results = this.state;
      results["userId"] = data._id;

      fetch('/apiokta', { 
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(results)
      }).then(user => {
        this.oktaAuth.signIn({
          username: this.state.email,
          password: this.state.password 
        }) 
        .then(res => this.setState({
          sessionToken: res.sessionToken
        }));
      })
      .catch(err => console.log);
    }).catch(err => console.log(err));
    
  }

  render(){
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    return(
      <div className="CreateAccount">
        <div className="wrapper">
          <div className="card-body row justify-content-center">
            <div className="col-sm-6 loginForm">
              <div className="card-header">
                <h1 className="card-title">Create an Account</h1>             
              </div>
              <br />
              <form onSubmit={this.handleSubmit}>
                <div className="form-element form-group">
                  <label>Email:</label>
                  <input className="form-control" type="email" id="email" value={this.state.email} 
                  onChange={this.handleEmailChange}/>
                </div>
                <div className="form-element form-group">
                  <label>First Name:</label>
                  <input className="form-control" type="text" id="firstName" value={this.state.firstName} 
                  onChange={this.handleFirstNameChange} />
                </div>
                <div className="form-element form-group">
                  <label>Last Name:</label>
                  <input className="form-control" type="text" id="lastName" value={this.state.lastName} 
                  onChange={this.handleLastNameChange} />
                </div>
                <div className="form-element form-group">
                  <label>Password:</label>
                  <input className="form-control" type="password" id="password" value={this.state.password} 
                  onChange={this.handlePasswordChange} />
                </div>
                <div className="form-check recruiterCheck">
                  <input className="form-check-input" type="checkbox" value={this.state.recruiter} id="recruiter" onChange={this.handleRecruiterChange}/>
                  <label className="form-check-label" htmlFor="recruiter">
                    Recruiter
                  </label>
                </div>
                <input className="form-control" type="submit" id="submit" value="Register"/>
                <p className="text-center">Already have an account? <a href="/login">Login.</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

});