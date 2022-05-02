import React, { Component } from 'react';
import { FeedbackButtons } from './FeedbackButtons';
import { Statistics } from './Statistics';
import s from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    if (e.target.id === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }

    if (e.target.id === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }

    if (e.target.id === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.Container}>
        <h2 className={s.Title}>Please leave feedback</h2>
        <FeedbackButtons onFeedback={this.handleFeedback} />

        <h2 className={s.Title}>Statistics</h2>
        <Statistics stats={{ good, neutral, bad }} />
      </div>
    );
  }
}
