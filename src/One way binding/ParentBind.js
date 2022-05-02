import React, { Component } from 'react'
import Child from './Childbind'

export class Parent extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'red'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
    console.log(this);
    let newColor = this.state.color === "red" ? "blue" : "red";
    this.setState({
      color: newColor
    });
  }
  render() {
    return (
      <div style={{backgroundColor: this.state.color, height: "500px", width: "500px"}}>
          <Child clickHandler= {this.changeColor} currentColor= {this.state.color}/>
      </div>
    )
  }
}

export default Parent