import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from '../actions';

export function posts(state = [], action) {
	switch (action.type) {
		case FETCH_POSTS_START:
			return state;
		case FETCH_POSTS_SUCCESS:
			return action.posts;
		case FETCH_POSTS_FAIL:
			return state;	
		default: 
			return state;	
	}
}