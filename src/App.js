import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Emitter from './Emitter';
import Receiver from './Receiver';
import Slider from 'react-rangeslider';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


class App extends Component {
  constructor(props, context) {
   super(props, context)
   this.state = {
     emitter: false,
     receiver: false
   }
   this.handleClickEmitter = this.handleClickEmitter.bind(this);
   this.handleClickReceiver = this.handleClickReceiver.bind(this);
}

  handleClickEmitter() {
    this.setState(prevState => ({
      emitter:  true,
      receiver: false
    }));
  }

  handleClickReceiver() {
    this.setState(prevState => ({
      emitter: false,
      receiver: true
    }));
  }

  render() {

    if(this.state.emitter){
      return (
        <div className="App">
          <Emitter />
        </div>
      );
    }if(this.state.receiver){
      return (
        <div className="App">
          <Receiver />
        </div>
      );
    }else{
      return (
        <div className="App">
        <button onClick={this.handleClickEmitter}>
          emitter
        </button>
        <button onClick={this.handleClickReceiver}>
          receiver
        </button>
        </div>
      );
    }
  }
}

export default App;
