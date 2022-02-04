import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
          this.state = {
            hasError:false
      }
    }
    static getDerivedStatefromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
  render() {
      if(this.state.hasError)
             return (<div><h1>Something went wrong</h1></div>)
             return this.props.children
  }

}
