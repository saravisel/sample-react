import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  render() {

    const user = {
        firstName: "Sara",
        lastName: "nya"
    }


    return (
      <div>
          <Child> 
          <h3> The Message is projected</h3>
          </Child>
      </div>
    )


  }
}

export default Parent