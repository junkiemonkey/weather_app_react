import React, { Component } from 'react';
import { func, object } from 'prop-types';

export default class Search extends Component {
  static propTypes = {
    handleSubmit: func,
    error: object,
  }

  state = {
    value: '',
  }

  handleInput = ({ target: { value } }) => this.setState({ value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (!value) return null;
    this.props.handleSubmit(value);
    this.setState({ value: '' });
  }

  render() {
    const {
      state: { value },
      props: { error },
      handleInput,
      handleSubmit,
    } = this;

    return (
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__input"
            value={value}
            onChange={handleInput}
            placeholder="City"
            required
          />
          <button className="search__button">Add</button>
        </form>
        { error && <div className="search__error">{ error.message }</div> }
      </div>
    );
  }
}

