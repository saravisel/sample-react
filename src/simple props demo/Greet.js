// import React from 'react'

// function Greet(props) {
//   console.log(props);
//   return (
//     <div>
//         <h1> {props.greet} </h1>
//     </div>
//   )
// }

import React, { Component } from 'react'

export class Greet extends Component {
  render() {
    // Object Destructuring
    let {greet} = this.props;
    return (
      <div>
        <h1> {greet}</h1>
      </div>
    )
  }
}

// export default Greet

export default Greet