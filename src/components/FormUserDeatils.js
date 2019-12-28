import React, { Component, Fragment } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormUserDeatils extends Component {
  continue = e => {
    e.preventDefault();
    this.props.saveText();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter Details</Typography>
            </Toolbar>
          </AppBar>
          <br />
          <TextField
            placeholder="Name"
            onChange={handleChange("name")}
            defaultValue={values.name}
          />
          <br />
          <br />
          <TextField
            placeholder="amount"
            type="number"
            onChange={handleChange("amount")}
            defaultValue={values.amount}
          />
          <br />
          <br />

          <TextField
            placeholder="Quantity"
            type="number"
            onChange={handleChange("quantity")}
            defaultValue={values.quantity}
          />
          <br />
          <br />
          <TextField
            placeholder="Type"
            onChange={handleChange("type")}
            defaultValue={values.type}
          />
          <br />
          <br />

          <Button variant="contained" color="primary" onClick={this.continue}>
            Next
          </Button>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDeatils;
