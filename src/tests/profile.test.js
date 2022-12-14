import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Profile from '../Components/Profile/Profile';

describe('Profile', () => {
  test('should match profile snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
