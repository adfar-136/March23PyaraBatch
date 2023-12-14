import React, { Component } from 'react'

export default class Updation extends Component {
    constructor() {
        console.log("Adfar")
        super()
        this.state ={
            count : 0,
            name:"Adfar",
            age:30,
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("scu")
      console.log(nextProps,nextState);
      if(nextState.count >= 10){
        return false;
      }
      return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
        if(prevState.count === 5){
            this.setState({name:"Newton School"})
        }
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        <button onClick={()=>this.setState({count:0})}>Reset</button>
      </div>
    )
  }
}
