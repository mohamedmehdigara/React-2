import React, {Component} from 'react';
import './App.css';
import {HobbyList} from './HobbyList';
import {Index} from './index';

class App extends Component{
  render(){
  return (
    <div className="App">
      <HobbyList/>
      <Index/>
    </div>
  );
}
}

export default App;
