import React, {Component} from 'react';
import styled from 'styled-components';
import { Portal, Segment } from 'semantic-ui-react';

class InvoiceDetail extends Component {
  state = {
    data: '',
    open: false
  }

  componentDidMount() {
    this.setState({
      data: this.props.invoice,
      open: this.props.open
    });
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <Portal onClose={this.handleClose} open={this.state.open}>
        <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
          <h1>{this.state.data}</h1>

        </Segment>
      </Portal>
    );
  }

}

export default InvoiceDetail;
