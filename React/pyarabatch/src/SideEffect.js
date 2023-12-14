import React, { Component } from 'react'
export default class SideEffect extends Component {
    constructor(){
        super()
        this.state ={
            timer:0,
        }
    }
    componentDidMount(){
       this.setTimer();
    }
    componentDidUpdate(){
       clearInterval(this.interval);
       this.setTimer();
    }
    setTimer(){
     this.interval =  setInterval(() => {
            console.log("hi")
            // this.setState((prev)=>({
            //     timer : prev.timer + 1
            // }))
        }, 2000);
    }
  render() {
    return (
      <div>
         <h1>Adfar Rashid</h1>
         <h1>{this.state.timer}</h1>
         <button onClick={()=>this.setState({timer:this.state.timer+1})}>Increment</button>
        </div>
    )
  }
}
