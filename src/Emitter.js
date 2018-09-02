import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


class Emitter extends Component {
  constructor(props, context) {
   super(props, context)
   this.state = {
     volume: 0,
     value: "",
   }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleOnChange = (value) => {
   this.setState({
     volume: value
   })
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   event.preventDefault();
   alert(`starting to stream ${this.state.value} at ${this.state.volume}`)
   fetch('/emitter', {
     method: 'post',
     body: JSON.stringify({
     value: this.state.value,
     volume: this.state.volume
      }),
      headers: {"Content-Type": "application/json"}
    });
    // alert(`${this.state.value} and ${this.state.volume} sent to server`)
   };

  render() {
    console.log(this.state.volume);
    console.log(this.state.value);
    let { volume } = this.state;
    return (
      <div className="Emitter">
        baud rate: {this.state.volume}
      <Slider
        className="slider"
        step={20}
        tooltip={false}
        value={volume}
        orientation="vertical"
        onChange={this.handleOnChange}
      />

      <form onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
      </div>
    );
  }
}

export default Emitter;
