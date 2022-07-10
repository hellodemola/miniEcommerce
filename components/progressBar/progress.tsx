/* eslint-disable no-nested-ternary */
import React from 'react';
import { useRouter } from 'next/router';
import {
  startedLine, inProgress, completed, notStarted, notStartedLine, lightRoundShape,
} from '../Svg';

type Props = {
};

const Progress: React.FC<Props> = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div className="flex items-center">
      <div className="ml-2">{currentPath === '/' ? inProgress : completed}</div>
      <div>{startedLine}</div>
      <div className="-ml-1">{currentPath === '/verify' ? inProgress : currentPath === '/number' ? completed : notStarted}</div>
      <div>{currentPath !== '/number' ? notStartedLine : startedLine}</div>
      <div className="-ml-1">{currentPath !== '/number' ? notStarted : inProgress}</div>
      <div>{notStartedLine}</div>
      <div className="-ml-1">{currentPath === '/confirmation' ? inProgress : lightRoundShape}</div>
    </div>
  );
};

export default Progress;
