import React from 'react';
import { array, func, bool } from 'prop-types';
import classNames from 'classnames';

const Table = ({ data, handleRemove, handleSort, reverse }) => data.length ? (
  <div className="table">
    <table>
      <thead>
        <tr>
          <th onClick={handleSort}>City {data.length > 1 && <i className={classNames('table__sort', { 'table__sort--reverse': reverse })} />}</th>
          <th>Temperature (&deg;C)</th>
          <th>Pressure (hPa)</th>
          <th />
        </tr>
      </thead>
      <tbody>
      {data.map(({ id, city, temp, pressure }) => (
        <tr key={id}>
          <td>{city}</td>
          <td>{temp}</td>
          <td>{pressure}</td>
          <td><button type="button" onClick={() => handleRemove(id)}>Remove</button></td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
) : <div className="empty">Add something...</div>;

Table.propTypes = {
  data: array,
  handleRemove: func,
  handleSort: func,
  reverse: bool,
};

export default Table;
