import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch, Link } from "react-router-dom";
import { withAuth } from '@okta/okta-react';
import './dashboard.css';
import WelcomeScreen from "../../Components/WelcomeScreen";
import UpdateAccount from "../UpdateAccount";
import ConnectionsJobSeeker from "../ConnectionsJobSeeker";
import PostJob from "../PostJob";
import Prep from "../Prep";
import ConnectionsRecruiter from "../ConnectionsRecruiter";
import CurrentPostings from "../CurrentPostings";
import SingleQuestion from "../SingleQuestion";



// This page holds the Dashboard Shell Component
// remove blue from bottom

export default withAuth(class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			authenticated: null, 
			user: null 
		};
		this.checkAuthentication = this.checkAuthentication.bind(this);
		this.getCurrentUser = this.getCurrentUser.bind(this);
		this.checkAuthentication();
	  }

	  async getCurrentUser(){
		this.props.auth.getUser()
		  .then(user => this.setState({user}));
	  }
	
	  async checkAuthentication() {
		const authenticated = await this.props.auth.isAuthenticated();
		if (authenticated !== this.state.authenticated) {
		  this.setState({ authenticated });
		}
	  }

	  componentDidMount(){
		this.getCurrentUser();
	  }
	
	  componentDidUpdate() {
		this.checkAuthentication();
	  }

	render () {
		if(!this.state.user) return null;
		if (this.state.authenticated === null) return null;
		const authNav = this.state.authenticated;
		let shownNavbar;
		if (this.state.user.website==="true"){
			shownNavbar=(
				<ul className="nav">
					<li>
						<Link to="/">
							<p className="welcome">Welcome</p>
							<p className="welcome">{this.state.user.name}</p>
					    </Link>
					</li>
					<li>
					    <Link to="/post">
					        <i className="pe-7s-plus"></i>
					        <p>Post a Job</p>
					    </Link>
					</li>
					<li>
					    <Link to="/rec_connections">
					        <i className="pe-7s-share"></i>
					        <p>Connections</p>
					    </Link>
					</li>
					<li>
					    <Link to="/postings">
					        <i className="pe-7s-copy-file"></i>
					        <p>Current Postings</p>
					    </Link>
					</li>
				</ul>
			);
		}
		else{
			shownNavbar=(
				<ul className="nav">
					<li>
						<Link to="/">
							<p className="welcome">Welcome</p>
							<p className="welcome">{this.state.user.name}</p>
					    </Link>
					</li>
					<li>
					    <Link to="/update">
					        <i className="pe-7s-user"></i>
					        <p>Profile</p>
					    </Link>
					</li>
					<li>
					    <Link to="/js_connections">
					        <i className="pe-7s-share"></i>
					        <p>Connections*</p>
					    </Link>
					</li>
					<li>
					    <Link to="/prep">
					        <i className="pe-7s-display2"></i>
					        <p>Prep</p>
					    </Link>
					</li>
				</ul>
			);
		}
		return (
			<div className="Dashboard">
	        	<div className="wrapper">
        			<div className="sidebar" data-color="blue" data-image="http://images.all-free-download.com/images/graphiclarge/seamless_network_background_312309.jpg">
				    	<div className="sidebar-wrapper">
				            <HashRouter>
					            {shownNavbar}
				            </HashRouter>
				    	</div>
    				</div>

				    <div className="main-panel">
				        <nav className="navbar navbar-default navbar-fixed navbar-fixed-top">
				            <div className="container-fluid">
				                <div className="navbar-header">
				                    <button type="button" className="navbar-toggle" data-toggle="collapse">
				                        <span className="sr-only">Toggle navigation</span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                    </button>
				                    <a className="navbar-brand nav-text logo" href="#">
				                    	PrepConnect
				                    	<i className="fa fa-check-square-o nav-text"></i>
			                    	</a>
				                </div>
				                <div className="collapse navbar-collapse">
									<ul className="nav navbar-nav navbar-right auth-nav">
										<li><a className="nav-text" href="javascript:void(0)" onClick={this.props.auth.logout}>Logout</a></li>
										<i className="fa fa-sign-out nav-text"></i>
									</ul>
				                </div>
				            </div>
				        </nav>

				        <div className="content content-wrapper dashboard-wrapper">
				            <div className="container-fluid">
				            <HashRouter>
					                <Switch>
					                	<Route exact path="/" component={WelcomeScreen} />
					                	<Route path="/update" component={UpdateAccount} />
					                	<Route path="/js_connections" component={ConnectionsJobSeeker} />
					                	<Route path="/post" component={PostJob} />
					                	<Route exact path="/prep" component={Prep} />
					                	<Route path="prep/:question" component={SingleQuestion} />
					                	<Route path="/rec_connections" component={ConnectionsRecruiter} />
					                	
					                	<Route path="/postings" component={CurrentPostings} />
					                </Switch>
				            </HashRouter>
				            </div>
				        </div>
				    </div>
				</div>
			</div>

		)
	}
})
