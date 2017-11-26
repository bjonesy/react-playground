import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index';

import Header from '../components/Header';
import Main from '../components/Main';

class Blog extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
				<div id="site" className="site">
					<Header />
					<Main/>
				</div>
			);
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators(Object.assign({fetchPosts, dispatch}), dispatch)
	}

	export default connect(null, mapDispatchToProps)(Blog)