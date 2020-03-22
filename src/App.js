import React from 'react';
import Clock from './Clock';
import AddClock from './AddClock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      timezones: [
        {
          id: 0,
          name: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }
      ],
      lastId: 0,
    }
  }

  render() {
    return (
      <div className="container">
        <AddClock handleNew={this.handleNew} />
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {this.state.timezones.map(timezone => (
            <div class="col mb-4">
              <Clock time={this.state.time} timezone={timezone} handleClose={this.handleClose} key={timezone.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  handleNew = (timezoneName) => {
    const newTimezone = {
      id: this.state.lastId + 1,
      name: timezoneName,
    }
    this.setState(prevState => {
      prevState.timezones.push(newTimezone);
      return {
        timezones: prevState.timezones,
        lastId: prevState.lastId + 1,
      }
    })
  }

  handleClose = (id) =>{
    let index = this.state.timezones.findIndex(timezone => timezone.id === id);
    this.setState(prevState => {
      prevState.timezones.splice(index, 1);
      return prevState;
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
