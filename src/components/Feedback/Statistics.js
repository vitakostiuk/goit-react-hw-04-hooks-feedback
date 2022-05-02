import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ stats: { good, neutral, bad } }) => (
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
  </div>
);

Statistics.propTipes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
