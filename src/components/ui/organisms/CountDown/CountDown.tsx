import {Button} from 'antd';

type CountDownProps = {
  count: number;
  onIncreaseCount: () => void;
};

export const CountDown = ({count, onIncreaseCount}: CountDownProps) => {
  return (
    <div className="card">
      <Button onClick={onIncreaseCount}>count is {count}</Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
