import React, { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import { Color } from '../style/colors';

class TableColumn extends Component {
  state = {
    data: [],
    column: null,
    direction: null,
    selectedRow: ''
  };

  componentDidMount() {
    this.setState({ data: this.props.content.data });
  }

  // Sorts the table based on whick Header column was clicked
  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  // When a Table row is clicked change the selectedRow in setState
  // so that the row can be set as Active
  // Also runs the function that was sent as props (updateState in App.js)
  // so that the detailed view appear on the left
  onRowClick = data => () => {
    this.setState({ selectedRow: data.id });
    this.props.func(data);

  }

  // Maps through the data objects in state.data and returns a TableRow for
  // each object
  renderTableRows() {
    return this.state.data.map(object => {

      // If the data object has the same id as state.selectedRow
      // then set the Row as active
      if(this.state.selectedRow === object.id) {
        return (
          <StyledRow
            key={object.id}
            onClick={this.onRowClick(object)}
            active
          >
            <StyledTableCell>{object.type}</StyledTableCell>
            <Table.Cell>{object.account_name}</Table.Cell>
            <Table.Cell>{object.status}</Table.Cell>
            <Table.Cell>{object.currency}</Table.Cell>
            <Table.Cell>${object.balance}</Table.Cell>
          </StyledRow>
        );
      }else {
        return (
          <StyledRow
            key={object.id}
            onClick={this.onRowClick(object)}
          >
            <Table.Cell>{object.type}</Table.Cell>
            <Table.Cell>{object.account_name}</Table.Cell>
            <Table.Cell>{object.status}</Table.Cell>
            <Table.Cell>{object.currency}</Table.Cell>
            <Table.Cell>${object.balance}</Table.Cell>
          </StyledRow>
        );
      }

    });
  }


  render() {
    const { column, direction } = this.state;

    return (
    <Container>
      <StyledNav>
        <h1>All invoices 2016</h1>
      </StyledNav>
      <StyledTable sortable selectable inverted>
        <Table.Header>
          <h2 style={{"paddingLeft":"10px"}}>Invoices</h2>
          <Table.Row>
            <Table.HeaderCell
            sorted={column === 'type' ? direction : null}
            onClick={this.handleSort('type')}>
            Type
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={column === 'account_name' ? direction : null}
            onClick={this.handleSort('account_name')}>
            Account name
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={column === 'status' ? direction : null}
            onClick={this.handleSort('status')}>
            Status
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={column === 'currency' ? direction : null}
            onClick={this.handleSort('currency')}>
            Currency
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={column === 'balance_int' ? direction : null}
            onClick={this.handleSort('balance_int')}>
            Balance
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.renderTableRows()}
        </Table.Body>
      </StyledTable>
    </Container>
    );
  }
}

const Container = styled.div`
    position: relative;
    padding-left: 20px;
`

const StyledNav = styled.nav`
    color: ${Color.textWhite};
`

const StyledTable = styled(Table)`
  &&& {
    background-color: ${Color.primaryLight};
    box-shadow: 2px 2px 4px 2px #0a0a0a6b;
  }
`

const StyledRow = styled(Table.Row)`
  &&& {
    border-left: 3px solid ${props => props.active ? Color.textGray : 'transparent'};
    :hover {
      cursor: pointer;
    }
  }
`

const StyledTableCell = styled(Table.Cell)`
  &&& {
    border-left: 3px solid ${Color.textGray};
  }
`

export default TableColumn;
