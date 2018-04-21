import weatherReducer, { initialState } from '../../app/reducers/weather.reducer';
import {
  FETCH_CITY,
  DONE,
  FAIL,
  REMOVE_CITY,
  INIT_TABLE_DATA,
} from '../../app/constants';

describe('TEST - REDUCER', () => {
  it('should return initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(initialState);
  });

  it('initData should return tableTestData', () => {
    const mockAction = {
      type: INIT_TABLE_DATA,
      payload: ['TEST'],
    };
    expect(weatherReducer(undefined, mockAction)).toHaveProperty('tableData', ['TEST']);
  });

  it('fetchDone should return test table data', () => {
    const testValue = {
      id: 0,
      city: 'test',
      temp: 0,
      pressure: 0,
    };
    const mockAction = {
      type: FETCH_CITY + DONE,
      payload: {
        id: 0,
        name: 'test',
        main: {
          temp: 0,
          pressure: 0,
        },
      },
    };
    expect(weatherReducer(undefined, mockAction)).toHaveProperty('tableData');
    expect(weatherReducer(undefined, mockAction).tableData[0]).toEqual(testValue);
  });

  it('fetchFail should return error', () => {
    const mockAction = {
      type: FETCH_CITY + FAIL,
      payload: 'ERROR',
    };
    expect(weatherReducer(undefined, mockAction)).toHaveProperty('error', 'ERROR');
  });

  it('removeCity should remove item fom tableData', () => {
    const mockAction = {
      type: REMOVE_CITY,
      payload: 0,
    };
    const mockState = {
      tableData: [
        { id: 0 },
      ],
    };
    expect(weatherReducer(mockState, mockAction).tableData).toHaveLength(0);
  });
});
