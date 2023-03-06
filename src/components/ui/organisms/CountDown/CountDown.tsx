type CountDownProps = {
  count: number;
  onIncreaseCount: () => void;
};

export const CountDown = ({count, onIncreaseCount}: CountDownProps) => {
  return (
    <div className="card">
      <button onClick={onIncreaseCount}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
