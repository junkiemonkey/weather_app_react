import * as actions from '../../app/actions';
import { REMOVE_CITY } from '../../app/constants';

describe('TEST - ACTIONS', () => {
  it('should export removeCity action', () => {
    expect(actions.removeCity).toBeDefined();
  });
  it('should export fetchCity action', () => {
    expect(actions.fetchCity).toBeDefined();
  });
  it('removeCity should return test action', () => {
    const testAction = {
      type: REMOVE_CITY,
      payload: 'TEST',
    };
    expect(actions.removeCity('TEST')).toEqual(testAction);
  });
});
