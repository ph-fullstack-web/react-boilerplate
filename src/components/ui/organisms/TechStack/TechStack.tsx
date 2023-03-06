import {ViteLink, ReactLink, Typography} from 'components/ui/atoms';

export const TechStack = () => {
  return (
    <div>
      <div>
        <ViteLink />
        <ReactLink />
      </div>
      <Typography variant="h1" color="white">
        Vite + React
      </Typography>
    </div>
  );
};
