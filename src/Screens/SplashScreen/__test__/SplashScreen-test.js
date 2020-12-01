// __tests__/Intro-test.js
import React from 'react';
// import Intro from '../Intro';
import SplashScreen from '../SplashScreen-test'

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});