import { useState } from 'react';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import FeedbackOption from './components/FeedbackOptions/FeedbackOptions';
import Statistic from './components/Statistics/Statistic';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerLeaveFeedback = value => {
    const key = value.target.textContent;
    switch (key) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = value => {
    return Math.round((good / value) * 100);
  };
  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(total);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOption onClick={handlerLeaveFeedback} options={['good', 'neutral', 'bad']} />
      </Section>
      <Section title="Statistic">
        {total ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
