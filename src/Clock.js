import React from 'react';

export default class Clock extends React.Component {

  handleClose = () => {
    this.props.handleClose(this.props.timezone.id);
  }

  /**********************
    Check these for formating dates and times:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
  **********************/
  render() {

    const timeFormat = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      timeZone: this.props.timezone.name,
    });
    const dateFormat = new Intl.DateTimeFormat('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      timeZone: this.props.timezone.name,
      timeZoneName: 'short'
    });
    const hour24Format = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      hour12: false,
      timeZone: this.props.timezone.name
    });

    // show a light card in AM, dark card in PM hours
    const cardClass = Number(hour24Format.format(this.props.time)) % 24 < 12 ? 'card bg-light' : 'card text-white bg-dark';
    return (
      <div className={cardClass} >
        <div className="card-header">
          {this.props.timezone.name}
          <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body text-primary">
          <h5 className="card-title">
            {timeFormat.format(this.props.time)}
          </h5>
          <p className="card-text text-muted">
            {dateFormat.format(this.props.time)}
          </p>
        </div>
      </div>
    );
  }
}
