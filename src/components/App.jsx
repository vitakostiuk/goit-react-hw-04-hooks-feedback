import React, { Component } from 'react';
import { Feedback } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
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
