import React, { Component } from "react";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";

import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// const { ipcRenderer } = window.require("electron");

export class Report extends Component {
  load = () => {
    this.props.loadData();
  };

  render() {
    const { responseValue } = this.props;
    return (
      <div>
        <button onClick={this.load}> Show users</button>
        {/* {responseValue.map(responseValue => (
          <p>{responseValue._id}</p>
        ))} */}

        <div>
          {responseValue.map((object, i) => {
            return (
              <div className={"row"} key={i}>
                {[
                  <TableContainer component={Paper}>
                    <TableBody>
                      <TableRow>
                        <TableCell align="right" key={i}>
                          Name: {object.name}
                        </TableCell>
                        <TableCell align="right" key={i}>
                          Amount: {object.amount}
                        </TableCell>
                        <TableCell align="right" key={i}>
                          Quantity: {object.quantity}
                        </TableCell>
                        <TableCell align="right" key={i}>
                          Type: {object.type}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </TableContainer>
                ]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Report;

// <p className="fosfo" key={i}>
//   name: {object.name}
// </p>,
// <p className="fosfo" key={i}>
//   Amount: {object.amount}
// </p>,
// <p className="fosfo" key={i}>
//   quantity: {object.quantity}
// </p>,
// <p className="fosfo" key={i}>
//   type: {object.type}
// </p>
