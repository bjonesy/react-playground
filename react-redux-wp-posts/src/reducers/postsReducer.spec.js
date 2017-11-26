import { posts } from './postsReducer';

describe('reducer fetch posts start', () => {
	it('should return nothing', () => {
		const payload = [];
		expect(
			posts([], {
			  type: 'FETCH_POSTS_START',
			  payload
			})
		).toEqual(
		  payload
		)
	});
});

describe('reducer fetch posts success', () => {
	it('should fetch posts', () => {
		const payload = [ { title: 'Title' } ];
		expect(
			posts([ { title: 'Title' } ], {
			  type: 'FETCH_POSTS_SUCCESS',
			  payload
			})
		).toEqual(
		  payload.data
		)
	});
});

describe('reducer fetch posts fail', () => {
	it('should fail', () => {
		const error = 'Error message';
		const payload = [ error ];
		expect(
			posts([ error ], {
			  type: 'FETCH_POSTS_FAIL',
			  payload
			})
		).toEqual(
		  payload
		)
	});
});