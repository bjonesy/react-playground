import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchPosts actions', () => {
	beforeEach(function () {
		moxios.install();
	});

	afterEach(function () {
		moxios.uninstall();
	});

	it('creates FETCH_POSTS_SUCCESS after successfuly fetching posts', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {id: 1, firstName: 'FirstName', displayName: 'FirstName'}
			});
		});
					
		const expectedActions = [
			{ type: actions.FETCH_POSTS_START },
			{ type: actions.FETCH_POSTS_SUCCESS, posts: {id: 1, firstName: 'FirstName', displayName: 'FirstName'}},
		];

		const store = mockStore({ posts: {} });

		return store.dispatch(actions.fetchPosts()).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		})
		.catch(err => {
		  throw(err)
		});
	});
});