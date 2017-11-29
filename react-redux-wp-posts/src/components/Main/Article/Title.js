import React from 'react';

const Title = (props) => {
	return (
		<header>
			<h1 dangerouslySetInnerHTML={ {__html: props.children} }/>
		</header>
	);
}

export default Title;