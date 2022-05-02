import React, { Component } from 'react'



export class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
        // this.updateClock = this.updateClock.bind(this);
    }

    componentDidMount() {
        console.log(this)
        this.intervalId = setInterval(
            () => this.updateClock(), 1000
            );
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    updateClock() {
        console.log(this)
        this.setState({
            time: new Date().toLocaleString()
        });
    }
  render() {
    return (
      <p className='App-clock'>
          The time is {this.state.time}.
      </p>
    )
  }
}

export default Clock