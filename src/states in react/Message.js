// state works only with class componenet
import React, { Component } from 'react'

export class Message extends Component {

    constructor(){
        super();
        this.state = {
          message:'Welcome visitor'
        }
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage(){
        console.log("clicked");

        this.setState(
            {
                message:" Thank you visiot"
            }
        );

    }

  render() {
    return (
      <div>
          <h2>{this.state.message}</h2>
          <button onClick={this.changeMessage}> Subscribe </button>
      </div>
    )
  }
}

export default Message