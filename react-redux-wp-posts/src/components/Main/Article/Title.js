import React, { Component } from 'react';

class Title extends Component {	
	render() {
		return (
			<header>
				<h1 dangerouslySetInnerHTML={ {__html: this.props.children} }/>
			</header>
		);
	}
}

export default Title;