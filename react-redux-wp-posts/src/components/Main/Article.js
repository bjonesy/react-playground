import React, { Component } from 'react';
import '../../assets/scss/components/article.css';

import Title from './Article/Title';
import Meta from './Article/Meta';
import Content from './Article/Content';

class Article extends Component {
	render() {
		const post = this.props.post;
		return (
			<article id={post.id} className="card post">
				<Title className="card-title">
					{post.title}
				</Title>
				<Meta meta_categories={post.category}/>
				<Content>
					{post.content}
				</Content>	
			</article>
		);
	}
}

export default Article;	