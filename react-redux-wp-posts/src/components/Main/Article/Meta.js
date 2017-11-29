import React from 'react';
import PropTypes from 'prop-types';

const Meta = (props) => {
	const renderCategories = (category) => {
		return props.meta_categories.map((cat, id) => {
			return (
				<span key={id}>
					{cat.category_name}
				</span>
			);
		});
	}

	return (
		<div className="card-meta">
			{renderCategories()}
		</div>
	);
}

Meta.defaultProps = {
	meta_categories: 'Test Category'
}

Meta.propTypes = {
	meta_categories: PropTypes.array
};	

export default Meta;