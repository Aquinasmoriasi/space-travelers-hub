import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Rockets from '../Components/Rockets/Rockets';
import fetchRockets from '../Redux/rockets/rockets';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Rockets', () => {
  test('should match Rockets snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});


// You would import the action from your codebase in a real scenario
// function success() {
//   return {
//     type: 'FETCH_DATA_SUCCESS',
//   };
// }

// function fetchData() {
//   return (dispatch) => {
//     return fetch('/users.json') // Some async action with promise
//       .then(() => dispatch(success()));
//   };
// }

it('should execute fetch data', () => {
  const store = mockStore({});

  // Return the promise
  return store.dispatch(fetchRockets()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(success());
  });
});
