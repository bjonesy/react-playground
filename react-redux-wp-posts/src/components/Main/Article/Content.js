import React from 'react';

const Content = (props) => {
	return (<div className="card-text" dangerouslySetInnerHTML={ {__html: props.children} }/>);
}

export default Content;