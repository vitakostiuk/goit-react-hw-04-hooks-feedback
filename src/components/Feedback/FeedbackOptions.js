import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onFeedback }) => (
  <div className={s.Container}>
    {options.map(option => {
      return (
        <button
          key={option}
          type={option}
          id={option}
          onClick={() => onFeedback(option)}
          className={s.Button}
        >
          {option}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
