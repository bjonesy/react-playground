import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/components/article.css';

import Title from './Article/Title';
import Meta from './Article/Meta';
import Content from './Article/Content';

const Article = (props) => {
	return (
		<article id={props.article_id} className="card post">
			<Title className="card-title">
				{props.article_title}
			</Title>
			<Meta meta_categories={props.article_category}/>
			<Content>
				{props.article_content}
			</Content>	
		</article>
	);
}

Article.defaultProps = {
	article_id: 1,
	article_title: 'Hey',
	article_category: 'Category',
	article_content: 'Test content'
}

Article.propTypes = {
	article_id: PropTypes.number,
	article_category: PropTypes.string,
	article_title: PropTypes.string,
	article_content: PropTypes.string
}

export default Article;	