import React, { Component } from 'react'
import './app.css';
import Person from './Components/Person';
export default class App extends Component {
  constructor (props){
    super(props)
    this.state= {show:false }
    
}
handleclick = () => this.setState({show: !this.state.show})
  render() {
    return (
      <div className='app'>
      
        <h2>checkpoint react state</h2>
      <button>onClick={this.handleclick}Click me</button>
          {this.state.show ? <Person/> : null}
      </div>
    )
  }
}
