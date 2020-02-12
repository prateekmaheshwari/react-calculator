import React from "react";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: '',
      total: 0,
      dotCounter: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = key => {
    switch (key) {
      case "C":
        this.clear();
        break;
      case "DEL":
        this.delete();
        break;
      case "=":
        this.evaluate();
        break;
      default:
        this.setExpression(key);
        break;
    }
  };

  clear() {
    this.setState({ expression: '', total: 0 });
  }

  delete() {
    let expression = this.state.expression;
    expression = expression.split('').slice(0, expression.length - 1).join('');
    this.setState({ expression });
  }

  evaluate() {
    let total = eval(this.state.expression);
    this.setState({ total });
  }

  setExpression(key) {
    let val = this.state.expression;
    if (val === '' && (key === '+' || key === '*' || key === '/')) {
      return;
    }
    if(isNaN(key)){
      this.setState({ dotCounter: 0 });
    }
    if (key === '.') {
      if (this.state.dotCounter > 0) {
        return;
      }
      this.setState({ dotCounter: this.state.dotCounter + 1 });
    }
    val += key;
    this.setState({ expression: val });
  }

  render() {
    return (
      <div className="calculator-container">
        <Screen expression={this.state.expression} total={this.state.total} />
        <Keypad handleClick={this.handleClick} />
      </div>
    );
  }
}

