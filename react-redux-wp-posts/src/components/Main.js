import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../assets/scss/components/transitions.css';

import Article from './Main/Article';

class Main extends Component {
	componentWillUpdate(nextProps, nextState){
    	return nextProps;
	}
	
	renderPosts(posts) {
		return posts.map(post => {
			return (<Article key={post.id}
							 post={post}/>);
		});
	}

	render() {
		return (
			<section id="primary" className="content-area">
				<main id="main" className="site-main">
					<Container>
						<Row>
							<Col sm="12" lg="12">
								<ReactCSSTransitionGroup
		                        transitionName="fade"
		                        transitionEnterTimeout={800}
		                        transitionLeaveTimeout={1}>
									{this.renderPosts(this.props.posts)}
								</ReactCSSTransitionGroup>
							</Col>	
						</Row>	
					</Container>	
				</main>
			</section>
		);
	}
}

function mapStateToProps({posts}) {
	return {posts};
}

export default connect(mapStateToProps)(Main)