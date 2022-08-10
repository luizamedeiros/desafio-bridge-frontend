import React from "react";
import "../style.css";
import {
  NUMBERS,
  TIME_TAKEN,
  NUMBER_INPUTTED,
  AMOUNT_OF_NUMBERS,
} from "../terms.js";

const HistoryInstanceItem = (props) => {
  return (
    <li>
      <p>
        {NUMBER_INPUTTED}
        {props.historyInstance.number}
        <br />
        {AMOUNT_OF_NUMBERS}
        {props.historyInstance.amount}
        <br />
        {NUMBERS}
        {props.historyInstance.numbers}
        <br />
        {TIME_TAKEN}
        {props.historyInstance.timeTaken} ms
      </p>
    </li>
  );
};

export default HistoryInstanceItem;
