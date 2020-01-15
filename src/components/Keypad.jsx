import React from "react";
import { keypadKeys } from "../utils/constants";
import Button from "./Button";

export default class Keypad extends React.Component {
  handleClick = key => {
    switch (key) {
      case "C":
        this.props.clear();
        break;
      case "DEL":
        this.props.delete();
        break;
      case "=":
        this.props.evaluate();
        break;
      default:
        this.props.calculate(key);
        break;
    }
  };
  render() {
    return (
      <div className="keypad">
        {keypadKeys.map((row, index) => {
          return (
            <div key={index} className="row">
              {row.map(key => (
                <Button
                  key={key}
                  onButtonClick={this.handleClick}
                  buttonKey={key}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}
