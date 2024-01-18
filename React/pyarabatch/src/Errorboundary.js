import React, { Component } from 'react'

export default class Errorboundary extends Component {
    constructor(){
        super();
        this.state={
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info
        })
    }
  render() {
if(this.state.errorInfo){
    return (
        <div>
            <h1>Error component</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      )
}
    return this.props.children
  }
}
