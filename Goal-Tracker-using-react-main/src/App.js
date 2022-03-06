import React, { useState } from "react";

import MonthGoalList from "./components/MonthGoals/MonthGoalList/MonthGoalList";
import MonthInput from "./components/MonthGoals/MonthInput/MonthInput";
import "./App.css";

const App = () => {
  const [monthGoals, setMonthGoals] = useState([
    { text: "Start planning your goals...!!", id: "g1" },
    { text: "Finish all your goals..!!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setMonthGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setMonthGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (monthGoals.length > 0) {
    content = (
      <MonthGoalList items={monthGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <h1>Monthly Goal Tracker</h1>
       <style>{"body { background-color: #CCCCFF; }"}</style>
      <section id="goal-form">
        <MonthInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
