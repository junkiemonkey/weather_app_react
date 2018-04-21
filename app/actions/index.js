import axios from 'axios';
import { createAction } from 'redux-actions';
import {
  DONE,
  FAIL,
  FETCH_CITY,
  REMOVE_CITY,
  INIT_TABLE_DATA,
} from '../constants';

const fetchDone = createAction(FETCH_CITY + DONE);
const fetchFail = createAction(FETCH_CITY + FAIL);

export const initTableData = createAction(INIT_TABLE_DATA);
export const removeCity = createAction(REMOVE_CITY);
export const fetchCity = city => dispatch => (
  axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      units: 'metric',
      APPID: '7ce88c1a7c8aafa95fa2235432f3f219',
    },
  })
    .then(({ data }) => dispatch(fetchDone(data)))
    .catch(({ response: { data } }) => dispatch(fetchFail(data)))
);
