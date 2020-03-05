import React, { Component } from "react";

export default class RemoveButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.removeFnc}>X</button>
      </div>
    );
  }
}
