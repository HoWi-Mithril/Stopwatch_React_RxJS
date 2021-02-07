import './App.css';
import React from 'react';
import Timer from './components/Timer';
import ControlButtons from './components/ControlButtons';
import { interval } from 'rxjs';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timerId: null,
    };
    this.source = interval(1000);
    this.subscribe = null;

  }


  addSeconds() {
    let seconds = +this.state.seconds;
    let minutes = +this.state.minutes;
    let hours = +this.state.hours;


    if (minutes >= 59 && seconds >= 59) {
      this.setState({
        hours: hours + 1,
        minutes: 0,
        seconds: 0
      });
    } else if (seconds >= 59) {
      this.setState({
        minutes: minutes + 1,
        seconds: 0
      });
    } else {
      this.setState({ seconds: seconds + 1 });
    }
  }

  handleActionStart = () => {

    if (!this.subscribe) {
      console.log("Start Timer");

      this.subscribe = this.source.subscribe(val => this.addSeconds());

    } else {
      console.log("Error - Timer Already Start");
    }
  }

  handleActionStop = () => {
    this.clearTimerId();
    this.clearTime();

  }

  handleActionWait = () => {
    console.log("WAIT")
    this.clearTimerId();

  }

  handleActionReset = () => {
    this.handleActionStop();
    setTimeout(() => this.handleActionStart(), 0)

  }

  clearTime() {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  }

  clearTimerId() {

    if (this.subscribe) {
      this.subscribe.unsubscribe();
      this.subscribe = null;
    }

  }


  render() {
    return <div>
      <section className="section_app_react">

        <h1>Stopwatch - React, RxJS</h1>
        <Timer time={this.state} />
        <ControlButtons

          onClickActionStart={this.handleActionStart}
          onClickActionStop={this.handleActionStop}

          onClickWait={this.handleActionWait}
          onClickReset={this.handleActionReset}
        />

      </section>

    </div>
  }
}



export default App;
