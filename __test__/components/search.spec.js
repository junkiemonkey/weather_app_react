import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../app/components/Search';

describe('SEARCH --- snapshot', () => {
  it('SEARCH renders correctly', () => {
    const testProps = {
      handleSubmit: jest.fn(),
      error: {},
    };
    const tree = renderer.create(<Search {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
