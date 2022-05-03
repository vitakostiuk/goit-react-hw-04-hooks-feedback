import React, { Component } from 'react';
import { Feedback } from './Feedback';

export class App extends Component {
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

  countTotalFeedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const feedbackPercentage = (good * 100) / (good + neutral + bad);
    return Math.round(feedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Feedback
          feedbacks={this.state}
          handleFeedback={this.handleFeedback}
          totalFeedback={() => this.countTotalFeedback({ good, neutral, bad })}
          positivePercentage={() =>
            this.countPositiveFeedbackPercentage({ good, neutral, bad })
          }
        />
      </>
    );
  }
}
