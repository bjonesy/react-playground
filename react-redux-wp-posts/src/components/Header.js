import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Row, Col, Jumbotron } from 'reactstrap';
import '../assets/scss/components/header.css';

class Header extends Component {
	render() {
		return (
			<header id="masthead" className="site-head">
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">React Redux WordPress Posts</NavbarBrand>
				</Navbar>
				<Container>
					<Row>
						<Col sm="12" lg="12">
							<Jumbotron>
								<h1 className="display-3">Blog Example</h1>
				        		<p className="lead">An example blog template built with Bootstrap</p>
				        		<hr className="my-2" />
							</Jumbotron>
						</Col>	
					</Row>
				</Container>
			</header>
		);
	}
}

export default Header;