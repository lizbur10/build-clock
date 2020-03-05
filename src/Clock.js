import React, { Component } from "react";
import AddButton from "./Buttons/AddButton";
export default class Clock extends Component {
  render() {
    return (
      <div>
        {this.props.date}
        <AddButton addBtnFnc={this.props.addBtnFnc}></AddButton>
      </div>
    );
  }
}
