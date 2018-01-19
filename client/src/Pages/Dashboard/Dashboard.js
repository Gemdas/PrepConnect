import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch, Link } from "react-router-dom";
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

class Dashboard extends Component {

	render () {
		return (
			<div className="Dashboard">
	        	<div className="wrapper">
        			<div className="sidebar" data-color="blue" data-image="http://images.all-free-download.com/images/graphiclarge/seamless_network_background_312309.jpg">
				    	<div className="sidebar-wrapper">
				            <HashRouter>
					            <ul className="nav">
					                <li>
					                	<Link to="/">
					                		<p className="welcome">Welcome User</p>
				                		</Link>
					                </li>
					                <li>
					                    <Link to="/update">
					                        <i className="pe-7s-user"></i>
					                        <p>Profile</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="/post">
					                        <i className="pe-7s-plus"></i>
					                        <p>Post a Job</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="/js_connections">
					                        <i className="pe-7s-share"></i>
					                        <p>Connections (JS)</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="/rec_connections">
					                        <i className="pe-7s-share"></i>
					                        <p>Connections (Rec)</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="/prep">
					                        <i className="pe-7s-display2"></i>
					                        <p>Prep</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="/postings">
					                        <i className="pe-7s-copy-file"></i>
					                        <p>Current Postings</p>
					                    </Link>
					                </li>
					            </ul>
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
				                    <ul className="nav navbar-nav navbar-right">
				                        <li>
				                           <a href="#" className="nav-text">
				                               Logout
				                               <i className="fa fa-sign-out nav-text"></i>
				                            </a>
				                        </li>
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
}

export default Dashboard;