import { handleActions } from 'redux-actions';
import { getDataFromStorage } from '../utils';
import {
  FETCH_CITY,
  DONE,
  FAIL,
  REMOVE_CITY,
  INIT_TABLE_DATA,
} from '../constants';

export const initialState = {
  tableData: [],
  error: null,
};

export default handleActions({

  [INIT_TABLE_DATA]: (state, { payload }) => ({
    ...state,
    tableData: payload,
  }),

  [FETCH_CITY + DONE]: (state, { payload: { id, name, main: { temp, pressure } } }) => ({
    ...state,
    tableData: [...state.tableData, { id, city: name, temp, pressure }],
    error: null,
  }),

  [FETCH_CITY + FAIL]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),

  [REMOVE_CITY]: (state, { payload }) => ({
    ...state,
    tableData: state.tableData.filter(item => item.id !== payload),
  }),

}, initialState);
