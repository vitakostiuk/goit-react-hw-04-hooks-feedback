import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section';
import s from './Feedback.module.css';

export const Feedback = ({
  feedbacks: { good, neutral, bad },
  handleFeedback,
  totalFeedback,
  positivePercentage,
}) => {
  const options = Object.keys({ good, neutral, bad });
  return (
    <div className={s.Container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            stats={{ good, neutral, bad }}
            total={totalFeedback(good, neutral, bad)}
            positivePercentage={positivePercentage(good, neutral, bad)}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

Feedback.propTipes = {
  feedbacks: PropTypes.objectOf(PropTypes.number).isRequired,
  handleFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
