import React, { Component } from 'react'

export default class Counterr extends Component {
    constructor(){
        super()
        this.state ={
            count:0
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick=()=>{
        this.setState({
            count :this.state.count+1
        })
    }
  render() {
    if(this.state.count === 10){
        throw new Error("App Barbaad")
    }
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
