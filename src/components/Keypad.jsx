import React from "react";
import { keypadKeys } from "../utils/constants";
import Button from "./Button";

export default (props) => {
    return (
      <div className="keypad">
        {keypadKeys.map((row, index) => {
          return (
            <div key={index} className="row">
              {row.map(key => (
                <Button
                  key={key}
                  onButtonClick={props.handleClick}
                  buttonKey={key}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
}
