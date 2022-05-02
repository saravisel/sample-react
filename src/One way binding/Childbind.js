import React, { Component } from 'react'

export class Child extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this);
    this.props.clickHandler();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> I did not like {this.props.currentColor} </button>
      </div>
    )
  }
}

export default Child