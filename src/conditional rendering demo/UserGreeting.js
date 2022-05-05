import React, { Component } from 'react'

export class UserGreeting extends Component {

  constructor(props){
    super(props);
    this.state = {
      isloggedIn: false
    };
  }

  clickHandler(){
    this.setState({
      isloggedIn: !this.state.isloggedIn
    });
  }

  render() {

    // with conditional rendering
    return(
      <>
        <button onClick={() => this.clickHandler()}>Toggle</button>
        {this.state.isloggedIn ? <h2>Welcome sara</h2> : <h2> Welcome guest</h2>}
      </>
    )

    // with if else
      // if(this.state.isloggedIn){
      //   return <h2>Welcome sara</h2>
      // }else{
      //   return <h2> Welcome guest</h2>
      //}

    // simple example
    // return (
    //   <div>
    //     <h2>Welcome sara</h2>
    //     <h2> Welcome guest</h2>
    //   </div>
    // )
  }
}

export default UserGreeting