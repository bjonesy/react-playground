import axios from 'axios';

export const FETCH_POSTS_START   = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL    = 'FETCH_POSTS_FAIL';

const fetchPostsStart = () => ({
	type: FETCH_POSTS_START,
});

const fetchPostsSuccess = posts => ({
	type: FETCH_POSTS_SUCCESS,
	posts,
});

const fetchPostsFail = error => ({
	type: FETCH_POSTS_FAIL,
	error,
});

export const fetchPosts = () => (dispatch) => {
	dispatch(fetchPostsStart());

	return axios.get(`http://jonescreativeconcepts.com/wp-json/custom-endpoints/v2/post-type/post`)
	.then(res => {
		dispatch(fetchPostsSuccess(res.data));
		return res;
	})
	.catch(error => {
		dispatch(fetchPostsFail(error));
		return error;
	});
};