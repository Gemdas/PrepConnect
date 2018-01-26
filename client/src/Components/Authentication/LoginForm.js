import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import '../../Pages/Login/login.css';

export default withAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({error: err.message});
        console.log(err.statusCode + ' error', err)
      });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    const errorMessage = this.state.error ? 
    <span className="error-message">{this.state.error}</span> : 
    null;

    return (
    <div className="wrapper loginBackground">
        <div className="card-body row align-items-center">
            <div className="col-sm-6 loginForm">
                <div className="card-header">
                    <h1 className="card-title login-title"><img className="login-logo" src="https://image.ibb.co/jKaSzG/pclogo.png" alt="pclogo" border="0" /></h1>
                    <h4 className="card-text login-subtitle text-center">Connecting Recruiters with Applicants</h4>              
                    <h4 className="card-text login-subtitle text-center">Based On Skills, Not Resumes</h4>              
                </div>
                <br />
            <form onSubmit={this.handleSubmit}>
                {errorMessage}
                <div className="form-element form-group">
                    <label className="login-text">Username:</label>
                    <input
                        id="username" type="text"
                        value={this.state.username}
                        className="form-control"
                        onChange={this.handleUsernameChange} />
                </div>

                <div className="form-element form-group">
                    <label className="login-text">Password:</label>
                    <input
                        id="password" type="password"
                        value={this.state.password}
                        className="form-control"
                        onChange={this.handlePasswordChange} />
                </div>
                <div className="text-center">
                  <input className="btn loginBtn" id="submit" type="submit" value="Login" />
                </div>
                <div>
                  <p className="text-center">No account? <a href="/register">Create one.</a></p>
                </div>
                
            </form>
        </div>
    </div>
</div>
    );
  }
});