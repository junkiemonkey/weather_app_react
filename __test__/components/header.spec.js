import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../app/components/Header';

it('HEADER --- snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
