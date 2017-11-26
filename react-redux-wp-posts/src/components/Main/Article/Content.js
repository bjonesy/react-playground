import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (<div className="card-text" dangerouslySetInnerHTML={ {__html: this.props.children} }/>);
	}
}

export default Content;