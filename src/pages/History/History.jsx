import React, { useEffect, useState } from "react";
import { HISTORY_EXPLANATION } from "./terms.js";
import HistoryInstanceDiv from "./Components/HistoryInstanceDiv";
import EmptyHistoryDiv from "./Components/EmptyHistory";
import "./style.css";

const History = () => {
  const [answerHistory, setAnswerHistory] = useState([]);

  useEffect(() => {
    const localStorageAnswerHistory = localStorage.getItem("answerHistory");
    if (localStorageAnswerHistory) {
      setAnswerHistory(JSON.parse(localStorageAnswerHistory));
    }
  }, []);

  return (
    <div className="content-container">
      <div className="textDiv">
        <h1>histórico_</h1>
        <p>{HISTORY_EXPLANATION}</p>
      </div>
      {answerHistory.length > 0 ? (
        <HistoryInstanceDiv answerHistory={answerHistory} />
      ) : (
        <EmptyHistoryDiv />
      )}
    </div>
  );
};

export default History;
