import React from 'react';
import renderer from 'react-test-renderer';
import Table from '../../app/components/Table';

describe('TABLE --- snapshot', () => {
  it('TABLE renders correctly', () => {
    const testProps = {
      handleRemove: jest.fn(),
      handleSort: jest.fn(),
      reverse: false,
      data: [],
    };
    const tree = renderer.create(<Table {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
