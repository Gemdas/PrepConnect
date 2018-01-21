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
                    <h1 className="card-title">Welcome to PrepConnect</h1>
                    <h3 className="card-subtitle mb-2 text-muted">Nail the Interview!</h3>
                    <h4 className="card-text">Interviewing made easy. Create an account or log in to review actual interview questions, or initiate an interview for a job matching your skill!</h4>              
                </div>
                <br />
            <form onSubmit={this.handleSubmit}>
                {errorMessage}
                <div className="form-element form-group">
                    <label>Username:</label>
                    <input
                        id="username" type="text"
                        value={this.state.username}
                        className="form-control"
                        onChange={this.handleUsernameChange} />
                </div>

                <div className="form-element form-group">
                    <label>Password:</label>
                    <input
                        id="password" type="password"
                        value={this.state.password}
                        className="form-control"
                        onChange={this.handlePasswordChange} />
                </div>
                <input className="btn btn-success loginBtn" id="submit" type="submit" value="Login" />
                <p className="text-center">No account? <a href="/register">Create one.</a></p>
            </form>
        </div>
    </div>
</div>
    );
  }
});