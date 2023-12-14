//render()
import React, { Component } from 'react'

export default class About extends Component {
  constructor(){
    console.log("constructor");
    super();
    this.state = {
        count:0,
        name:"Adfar"
    }
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps")
    return {name:props.firstName}
  }
  componentDidMount(){
    console.log("componentdidMount");
    setTimeout(()=>{
        this.setState({
            count :this.state.count+2
    })
    },3000);
  }
  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Add One</button>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
