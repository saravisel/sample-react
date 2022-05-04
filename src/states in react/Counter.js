import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    incrementCounter(){
        // Async Method
        // prevState implicit variable
        this.setState( (prevState) => ({
            count:  prevState.count + 1
        }), () => {
            console.log(this.state.count)
        });
        
    }

    incrementFiveTimes(){
        // All request will be asynchronous request
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }
  render() {
    return (
      <div>
          <h2> {this.state.count} </h2>
          <button onClick={() => this.incrementFiveTimes()}>  Counter </button>
      </div>
    )
  }
}

export default Counter