import React, { Component } from 'react'

export class Child extends Component {
  render() {

    let {firstName, lastName, children} = this.props;
    return (
      <div>
          <h2> {firstName} {lastName}</h2>
          {children}
      </div>
    )
  }
}

Child.defaultProps = {
  firstName: "Viji",
  lastName: "ya"
}

export default Child