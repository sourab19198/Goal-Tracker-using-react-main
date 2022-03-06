import React from 'react';

import MonthGoalItem from '../MonthGoalItem/MonthGoalItem';
import './MonthGoalList.css';

const MonthGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <MonthGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </MonthGoalItem>
      ))}
    </ul>
  );
};

export default MonthGoalList;
