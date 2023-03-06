import {useState} from 'react';

import {WelcomeTemplate} from 'components/templates';

export const WelcomePage = () => {
  const [count, setCount] = useState(0);

  const onIncreaseCount = () => {
    setCount(prev => prev + 1);
  };

  return <WelcomeTemplate count={count} onIncreaseCount={onIncreaseCount} />;
};
