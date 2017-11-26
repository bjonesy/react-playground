import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Meta extends Component {
	static defaultProps = {
    	meta_categories: 'Test Category'
  	}

	renderCategories(category) {
		return this.props.meta_categories.map((cat, id) => {
			return (
				<span key={id}>
					{cat.category_name}
				</span>
			);
		});
	}

	render() {
		return (
			<div className="card-meta">
				{this.renderCategories()}
			</div>
		);
	}
}

Meta.propTypes = {
	meta_categories: PropTypes.array
};	

export default Meta;