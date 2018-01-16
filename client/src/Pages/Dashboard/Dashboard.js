import React, { Component } from 'react';
import './dashboard.css';

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
				            <ul className="nav">
				                <li>
				                    <a href="#">
				                        <i className="pe-7s-user"></i>
				                        <p>Profile</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="#">
				                        <i className="pe-7s-plus"></i>
				                        <p>Post a Job</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="#">
				                        <i className="pe-7s-share"></i>
				                        <p>Connections</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="#">
				                        <i className="pe-7s-display2"></i>
				                        <p>Prep</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="#">
				                        <i className="pe-7s-copy-file"></i>
				                        <p>Current Postings</p>
				                    </a>
				                </li>
				            </ul>
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

				            </div>
				        </div>
				    </div>
				</div>
			</div>

		)
	}
}

export default Dashboard;