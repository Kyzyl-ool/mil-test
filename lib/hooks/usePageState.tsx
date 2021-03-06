import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './PageStateHook.scss';

type AnimationType = 'appear' | 'slideTop' | 'slideBottom' | 'none';
type IUsePageState = [
  string,
  () => void,
  () => void,
  (key: string, node: React.ReactNode, animate?: AnimationType) => React.ReactNode
];

const animationClasses = {
  ['appear']: 'page-state-animations',
  ['slideTop']: 'page-state-animation-slide-top',
  ['slideBottom']: 'page-state-animation-slide-bottom'
};

const usePageState = (states: string[]): IUsePageState => {
  console.assert(states.length > 0);
  const [currentState, setCurrentState] = useState(0);

  const setNext = () => {
    setCurrentState((currentState + 1) % states.length);
  };
  const setPrev = () => {
    setCurrentState((currentState - 1) % states.length);
  };
  const renderForState = (key: string, node: React.ReactNode, animationType = 'none'): React.ReactNode => {
    if (animationType !== 'none') {
      return (
        <CSSTransition
          in={key === states[currentState]}
          timeout={300}
          classNames={animationClasses[animationType]}
          unmountOnExit
          exit
        >
          {node}
        </CSSTransition>
      );
    } else {
      return key === states[currentState] ? node : null;
    }
  };
  return [states[currentState], setNext, setPrev, renderForState];
};

export default usePageState;
