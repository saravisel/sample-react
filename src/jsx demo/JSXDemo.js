import React from 'react'
import '../jsx demo/jsxpages.css'

function buttonTextFunction(){
    return "Click Here";
}

function JSXDemo() {
  const buttonText = "Submit"
  return (
    <div>
        <label className='label'> Enter Name :</label>
        <input type= "text" id="name"/>
        <button style={{backgroundColor:'blue', color:'white'}}> {"Please " +buttonTextFunction()} </button>
    </div>
  )
}

export default JSXDemo;