import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch, Link } from "react-router-dom";
import './dashboard.css';
import WelcomeScreen from "../../Components/WelcomeScreen";
import UpdateAccount from "../UpdateAccount";
import ConnectionsJobSeeker from "../ConnectionsJobSeeker";

// This page holds the Dashboard Shell Component

class Dashboard extends Component {

	render () {
		return (
			<div className="Dashboard">
	        	<div className="wrapper">
        			<div className="sidebar" data-color="blue" data-image="assets/images/network.png">
				    	<div className="sidebar-wrapper">
				            <HashRouter>
					            <ul className="nav">
					                <li>
					                    <Link to="/">
					                        <p className="welcome">Welcome, User</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="/update">
					                        <i className="pe-7s-user"></i>
					                        <p>Profile</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="#">
					                        <i className="pe-7s-plus"></i>
					                        <p>Post a Job</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="/js_connections">
					                        <i className="pe-7s-share"></i>
					                        <p>Connections</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="#">
					                        <i className="pe-7s-display2"></i>
					                        <p>Prep</p>
					                    </Link>
					                </li>
					                <li>
					                    <Link to="#">
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
				                <div className="row">
					                <Switch>
					                	<Route path="/dashboard" component={WelcomeScreen} />
					                	<Route path="/update" component={UpdateAccount} />
					                	<Route path="/js_connections" component={ConnectionsJobSeeker} />
					                </Switch>
				                </div>
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