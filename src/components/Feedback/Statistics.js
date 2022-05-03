import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({
  stats: { good, neutral, bad },
  total,
  positivePercentage,
}) => (
  <div>
    <ul className={s.List}>
      <li className={s.Item}>
        Good:&ensp;<span className={s.Number}>{good}</span>
      </li>
      <li className={s.Item}>
        Neutral:&ensp;<span className={s.Number}>{neutral}</span>
      </li>
      <li className={s.Item}>
        Bad:&ensp;<span className={s.Number}>{bad}</span>
      </li>
    </ul>
    <p className={s.Computed}>
      Total:&ensp;<span className={s.Number}>{total}</span>
    </p>
    <p className={s.Computed}>
      Positive feedback:&ensp;
      <span className={s.Number}>{positivePercentage}%</span>
    </p>
  </div>
);

Statistics.propTipes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
