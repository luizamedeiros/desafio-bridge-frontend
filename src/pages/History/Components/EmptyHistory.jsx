import React from "react";
import "../style.css";
import { NO_HISTORY } from "../terms";

const EmptyHistoryDiv = () => {
  return (
    <ul className="emptyDiv">
      <li>
        <p> {NO_HISTORY} </p>
      </li>
    </ul>
  );
};

export default EmptyHistoryDiv;
