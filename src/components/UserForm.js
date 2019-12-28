import React, { Component } from "react";
import FormUserDetails from "./FormUserDeatils";
import Invoice from "./Invoice";
import Report from "./Report";

const { ipcRenderer } = window.require("electron");

export class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      name: "",
      amount: "",
      quantity: "",
      type: "",
      responseValue: []
    };

    this.handleData = this.handleData.bind(this);
  }

  //Proceed to the next step.
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Go back to previous step.
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  saveText = () => {
    console.log("Sending data from renderer");
    const { name, amount, quantity, type } = this.state;
    const values = { name, amount, quantity, type };

    ipcRenderer.send("channel1", values);
  };

  componentDidMount() {
    ipcRenderer.on("handleData", this.handleData);
  }

  handleData(e, data) {
    const { args } = data;
    console.log(args);

    this.setState({
      responseValue: args
    });
  }

  loadData() {
    console.log("getting data from storage");
    ipcRenderer.send("fetchData", "ping");
  }

  render() {
    const { step } = this.state;
    const { name, amount, quantity, type } = this.state;
    const values = { name, amount, quantity, type };
    const { responseValue } = this.state;

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            saveText={this.saveText}
            values={values}
          />
        );
      case 2:
        return (
          <Invoice
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <Report loadData={this.loadData} responseValue={responseValue} />
        );
      default:
    }
  }
}

export default UserForm;
