import { useState } from 'react';
import { Feedback } from './Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const feedbackPercentage = (good * 100) / (good + neutral + bad);
    return Math.round(feedbackPercentage);
  };

  return (
    <>
      <Feedback
        feedbacks={{ good, neutral, bad }}
        handleFeedback={handleFeedback}
        totalFeedback={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
};
