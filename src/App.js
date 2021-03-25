import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };
  log = () => {
    this.setState({ input: `${this.state.input}log(` });
  };
  log10 = () => {
    this.setState({ input: math.log(this.state.input, 10) });
  };
  derive = () => {
    this.setState({ input: math.derivative(this.state.input, 'x').toString() });
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.derive}>dy/dx</Button>
            <Button handleClick={this.addToInput}>sinh</Button>
            <Button handleClick={this.addToInput}>cosh</Button>
            <Button handleClick={this.addToInput}>x</Button>
           
          </div>
          <div className="row">
            <Button handleClick={this.log10}>log</Button>
            <Button handleClick={this.log}>ln</Button>
            <Button handleClick={this.addToInput}>sqrt</Button>
            <Button handleClick={this.addToInput}>e</Button>
           
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>sin</Button>
            <Button handleClick={this.addToInput}>cos</Button>
            <Button handleClick={this.addToInput}>tan</Button>
            <Button handleClick={this.addToInput}>^</Button>
           
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>rad</Button>
            <Button handleClick={this.addToInput}>deg</Button>
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.addToInput}>)</Button>
           
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;