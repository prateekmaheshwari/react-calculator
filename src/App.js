import React from "react";
import { connect } from "react-redux";
import { calculate, deleteLastEntry, clear, evaluateExpression } from "./store/actions/calculate";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";
import * as fromCalculator from "./store";
import "./App.css";

export class App extends React.Component {
  
  render() {
    return (
      <div className="calculator-container">
        <Screen {...this.props} />
        <Keypad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
