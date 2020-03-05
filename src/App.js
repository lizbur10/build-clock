import React from "react";
import "./App.css";
import Clock from "./Clock";
import uuid from "react-uuid";
import RemoveBtn from "./Buttons/RemoveButton";
import AddButton from "./Buttons/AddButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      clockIDs: [1, 2]
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  addBtnListener = () => {
    const lastNum = this.state.clockIDs[this.state.clockIDs.length - 1];
    const clockIds = this.state.clockIDs;
    clockIds.push(lastNum + 1);
    this.setState({ clockIDs: clockIds });
  };

  removeBtnListener = () => {
    const clockIds = this.state.clockIDs;
    clockIds.pop();
    this.setState({ clockIDs: clockIds });
  };

  mappingFunc = () => {
    return this.state.clockIDs.map(id => {
      return (
        <Clock
          key={uuid()}
          addBtnFnc={this.addBtnListener}
          date={this.state.date.toLocaleTimeString()}
        ></Clock>
      );
    });
  };

  render() {
    return (
      <div>
        {this.mappingFunc()}
        <AddButton addBtnFnc={this.addBtnListener}></AddButton>

        <RemoveBtn removeFnc={this.removeBtnListener}></RemoveBtn>
      </div>
    );
  }
}

export default App;
