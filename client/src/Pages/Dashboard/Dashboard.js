import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch, Link } from "react-router-dom";
import './dashboard.css';
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
				            <div className="logo">
				                <a href="#" className="simple-text">
				                    PrepConnect
				                </a>
				            </div>

				            <HashRouter>
					            <ul className="nav">
					                <li className="active">
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
>>>>>>> master
				    	</div>
    				</div>

				    <div className="main-panel">
				        <nav className="navbar navbar-default navbar-fixed">
				            <div className="container-fluid">
				                <div className="navbar-header">
				                    <button type="button" className="navbar-toggle" data-toggle="collapse">
				                        <span className="sr-only">Toggle navigation</span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                    </button>
				                    <a className="navbar-brand" href="#">User Name</a>
				                </div>
				                <div className="collapse navbar-collapse">
				                    <ul className="nav navbar-nav navbar-left">
				                        <li>
				                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
				                                <i className="fa fa-dashboard"></i>
				                            </a>
				                        </li>
				                    </ul>

				                    <ul className="nav navbar-nav navbar-right">
				                        <li>
				                           <a href="#">
				                               Logout
				                            </a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </nav>

				        <div className="content content-wrapper">
				            <div className="container-fluid">
				            <HashRouter>
				                <div className="row">
					                <Switch>
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