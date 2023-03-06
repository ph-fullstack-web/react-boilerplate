import {Typography} from 'components/ui/atoms';
import {CountDown, TechStack} from 'components/ui/organisms';

type WelcomeTemplateProps = {
  count: number;
  onIncreaseCount: () => void;
};

export const WelcomeTemplate = ({
  count,
  onIncreaseCount,
}: WelcomeTemplateProps) => {
  return (
    <div className="App">
      <TechStack />
      <CountDown count={count} onIncreaseCount={onIncreaseCount} />
      <p className="read-the-docs">
        <Typography variant="body1" color="white">
          Click on the Vite and React logos to learn more
        </Typography>
      </p>
    </div>
  );
};
