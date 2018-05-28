import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Divider,
  Segment,
  Image,
  Button,
  Grid,
  Header,
  Transition
} from 'semantic-ui-react';
import { Color } from '../style/colors';

class Details extends Component {
  state = {
    invoice: '',
    open: false
  }

  // The function runs when the component recieves new props
  // when updateState in App.js runs which is done when a table row is clicked
  componentWillReceiveProps(newProps) {
    this.setState({ invoice: newProps.invoice, open: newProps.open });
  }

  // When the X button on the detailed view is clicked set open to false
  // so the view closes
  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <Container>
          <Transition.Group animation="scale" duration={500}>
            {this.state.open && <StyledSegmentRoot textAlign="center">
            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <Image src="/assets/images/trump.png" />
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <Grid.Column>
                  <Header as="h3" inverted>{this.state.invoice.account_name}</Header>
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <StyledSegmentDetail>
                  <Grid columns={2} divided padded inverted>
                    <Grid.Row>
                      <Grid.Column>
                        <StyledLabelWhite>TYPE</StyledLabelWhite>
                        <br />
                        <StyledLabelGray>{this.state.invoice.type}</StyledLabelGray>
                      </Grid.Column>
                      <Grid.Column>
                        <StyledLabelWhite>ACCOUNT NAME</StyledLabelWhite>
                        <br />
                        <StyledLabelGray>{this.state.invoice.account_name}</StyledLabelGray>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <StyledLabelWhite>STATUS</StyledLabelWhite>
                        <br />
                        <StyledLabelGray>{this.state.invoice.status}</StyledLabelGray>
                      </Grid.Column>
                      <Grid.Column>
                        <StyledLabelWhite>CURRENCY</StyledLabelWhite>
                        <br />
                        <StyledLabelGray>{this.state.invoice.currency}</StyledLabelGray>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <StyledLabelWhite>BALANCE</StyledLabelWhite>
                        <br />
                        <StyledLabelGray>${this.state.invoice.balance}</StyledLabelGray>
                      </Grid.Column>
                      <Grid.Column>
                        <StyledLabelWhite>NOTES</StyledLabelWhite>
                        <br />
                        <StyledLabelGray>{this.state.invoice.notes}</StyledLabelGray>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </StyledSegmentDetail>
              </Grid.Row>
            </Grid>
            <Divider />
            <StyledButton onClick={() => this.setState({ open: false })}>
              X
            </StyledButton>
          </StyledSegmentRoot>
          }
          </Transition.Group>

      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const StyledSegmentRoot = styled(Segment)`
  &&& {
    background-color: ${Color.primary};
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    box-shadow: 2px 2px 4px 2px #0a0a0a6b;
  }
`

const StyledSegmentDetail = styled(Segment)`
  &&& {
    background-color: ${Color.primary};
  }
`

const StyledLabelWhite = styled.label`
  color: ${Color.textWhite};
  font-weight: bold;
`

const StyledLabelGray = styled.label`
  color: ${Color.textGray};
`

const StyledButton = styled(Button)`
  &&& {
    color: ${Color.textWhite};
    background-color: ${Color.accentRed};
    margin-left: auto;
    margin-right: auto;
  }
`

export default Details;
