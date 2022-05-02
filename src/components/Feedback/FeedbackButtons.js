import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackButtons.module.css';

export const FeedbackButtons = ({ onFeedback }) => (
  <div className={s.Container}>
    <button type="button" id="good" onClick={onFeedback} className={s.Button}>
      Good
    </button>
    <button
      type="button"
      id="neutral"
      onClick={onFeedback}
      className={s.Button}
    >
      Neutral
    </button>
    <button type="button" id="bad" onClick={onFeedback} className={s.Button}>
      Bad
    </button>
  </div>
);

FeedbackButtons.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};
