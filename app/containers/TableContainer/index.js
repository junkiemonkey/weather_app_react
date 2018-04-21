import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { connect } from 'react-redux';
import { removeCity, initTableData } from '../../actions';
import { setDataToStorage, getDataFromStorage } from '../../utils';
import Table from '../../components/Table';

@connect(({ weather }) => weather, { removeCity, initTableData })
export default class TableContainer extends Component {
  static propTypes = {
    tableData: array,
    removeCity: func,
    initTableData: func,
  }

  constructor(props) {
    super(props);
    const { tableData } = this.props;
    this.state = {
      tableData,
      reverse: false,
    };
  }

  componentWillMount() {
    const tableData = getDataFromStorage();
    this.props.initTableData(tableData);
  }

  componentWillReceiveProps(props) {
    const { tableData } = this.props;
    if (tableData.length !== props.tableData.length) {
      this.setState({ tableData: props.tableData }, () => setDataToStorage(props.tableData));
    }
  }

  handleSort = () => {
    const { tableData, reverse } = this.state;
    this.setState({ tableData: tableData.sort(this.sortArray()), reverse: !reverse });
  }

  sortArray = () => this.state.reverse ? ((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0)) : ((a, b) => (a.city < b.city) ? 1 : ((b.city < a.city) ? -1 : 0));

  render() {
    const {
      props: { removeCity },
      state: { tableData, reverse },
      handleSort,
    } = this;
    return (
      <Table
        data={tableData}
        reverse={reverse}
        handleRemove={removeCity}
        handleSort={handleSort}
      />
    );
  }
}
