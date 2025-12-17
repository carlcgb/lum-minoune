import React, { ReactNode } from 'react';
import { useCursor } from '../context/CursorContext';
import { CursorState } from '../types';

interface CursorTriggerProps {
  children: ReactNode;
  state: CursorState;
  className?: string;
  [key: string]: any;
}

/**
 * CursorTrigger - Wrapper component that sets cursor state on hover
 * 
 * This component allows any element to declaratively request a cursor state.
 * It handles mouse enter/leave events and updates the global cursor context.
 */
export const CursorTrigger: React.FC<CursorTriggerProps> = ({
  children,
  state,
  className = '',
  ...props
}) => {
  const { setCursorState, isTouchDevice } = useCursor();

  if (isTouchDevice) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const handleMouseEnter = () => {
    setCursorState(state);
  };

  const handleMouseLeave = () => {
    setCursorState('default');
  };

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};
