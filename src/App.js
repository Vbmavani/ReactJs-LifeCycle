import React, { Component } from 'react';

import './App.css';
import Home from'./Home'

class App extends Component {
  constructor(){
    super();
    console.log('Constructor');
    this.state={
      boolean :true,
    }
  }
  componentWillMount(){
    console.log('----componentWillMount')
    
  }
  componentDidMount(){
    console.log('----ComponentDidMount')
  }
  componentWillReceiveProps(nextProps){
    console.log('----componentWillReceiveProps',nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('---shouldComponentUpdate',nextProps,nextState);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('----componentWillUpdate',nextProps,nextState);
  }
  componentDidUpdate(prevProps,prevState){
    console.log('----componentDidlUpdate',prevProps,prevState);
  }
  componentWillUnmount(){
    console.log('----componentwillUnmount');
    
  }

  onchange=()=>{
    console.log('onchange')
    this.setState({boolean : !this.state.boolean})
  }

  render() {
    console.log('Render');
    let c = (
      this.state.boolean ? (<h1>App page</h1>) : null
  )
    return (
      <div className="App">
        <button onClick={this.onchange} >App.js Change</button>
        {c}
        <h1>----------------------------------------------------------</h1>      
        <Home hello={this.state.boolean} />
      </div>
    );
  }
}

export default App;
