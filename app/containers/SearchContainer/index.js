import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCity } from '../../actions';
import Search from '../../components/Search';

@connect(({ weather: { error } }) => ({ error }), { fetchCity })
export default class SearchContainer extends Component {
  static propTypes = {
    fetchCity: func,
    error: object,
  }

  render() {
    return <Search handleSubmit={this.props.fetchCity} error={this.props.error} />;
  }
}
