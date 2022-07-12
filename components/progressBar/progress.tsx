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
      <div className="-ml-1">{currentPath === '/verify' ? inProgress : currentPath === '/number' ? completed : currentPath === '/checkout' ? completed : notStarted}</div>
      <div>{currentPath === '/' ? notStartedLine : startedLine}</div>
      <div className="-ml-1">{currentPath === '/number' ? inProgress : currentPath === '/checkout' ? completed : notStarted}</div>
      <div>{currentPath === '/checkout' ? startedLine : notStartedLine}</div>
      <div className="-ml-1">{currentPath === '/checkout' ? inProgress : lightRoundShape}</div>
    </div>
  );
};

export default Progress;
