import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';

/**
 * Components
 */
import Header from '../components/Header';
import Search from './SearchContainer';
import Table from './TableContainer';

export default class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          <Search />
          <Table />
        </div>
      </div>
    );
  }
}

