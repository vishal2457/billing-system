import React, { Component, Fragment } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

export class FormUserDeatils extends Component {
  continue = e => {
    e.preventDefault();

    window.print();
  };

  next = e => {
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, amount, quantity, type }
    } = this.props;

    return (
      <MuiThemeProvider>
        <Fragment>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemText primary="Name" secondary={name} />

            <ListItemText primary="Amount" secondary={amount} />

            <ListItemText primary="Quantity" secondary={quantity} />

            <ListItemText primary="Type" secondary={type} />
          </List>

          <Button variant="contained" color="primary" onClick={this.continue}>
            print
          </Button>
          <Button variant="contained" onClick={this.back}>
            Back
          </Button>
          <Button variant="contained" onClick={this.next}>
            Reports
          </Button>
          <p id="number" value="0"></p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDeatils;
