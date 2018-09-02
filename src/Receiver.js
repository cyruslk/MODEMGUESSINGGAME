import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


class Receiver extends Component {
  constructor(props, context) {
   super(props, context)
   this.state = {
     baudRate: 0,
     value: "",
   }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleOnChange = (baudRate) => {
   this.setState({
     baudRate: baudRate
   })
   console.log("this is the new state", this.state);
 }
 handleChange(event) {
   this.setState({value: event.target.value});
 }
 handleSubmit(event) {
   event.preventDefault();
 }

 componentDidMount(){
   fetch('/receiver', {
     method: 'post',
     body: JSON.stringify({
       value: this.state.baudRate,
      }),
      headers: {"Content-Type": "application/json"}
    });
 }
 
 componentDidUpdate(){
   fetch('/receiver', {
     method: 'post',
     body: JSON.stringify({
       baudRate: this.state.baudRate
      }),
      headers: {"Content-Type": "application/json"}
    });
 }
  render() {
    console.log(this.state.baudRate);
    console.log(this.state.value);


    let { baudRate } = this.state
    return (
      <div className="Receiver">
          {this.state.baudRate}
        <Slider
          className="slider"
          step={20}
          tooltip={false}
          value={baudRate}
          orientation="vertical"
          onChange={this.handleOnChange}
        />
        here

      </div>
    );
  }
}

export default Receiver;
