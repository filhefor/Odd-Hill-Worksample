import React, { Component } from 'react';
import TableColumn from './containers/table';
import Details from './containers/details';
import { Grid } from 'semantic-ui-react';
import { content } from './data/tablecontent';
import styled from 'styled-components';
import { Color } from './style/colors';

class App extends Component {
  state = {
    invoice: '',
    open: false
  }

  // The function runs when a table row is clicked and
  // changes state.invoice and state.open which is then sent
  // as props to Details
  updateState = (data) => {
    this.setState({ invoice: data, open: true });
  }

  render() {
    return (
      <StyledGrid columns={2}>
        <Grid.Column width={8}>
          <TableColumn content={content} func={this.updateState}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Details invoice={this.state.invoice} open={this.state.open}/>
        </Grid.Column>
      </StyledGrid>
    );
  }
}

const StyledGrid = styled(Grid)`
  &&& {
    font-family: 'Roboto', sans-serif;
    background-color: ${Color.primaryLight};
  }
`

export default App;
