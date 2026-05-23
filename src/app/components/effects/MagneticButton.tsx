import React, { isValidElement } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children }: MagneticButtonProps) {
  // We remove the shaky Framer Motion tracking and replace it with 
  // a fluid, premium CSS transform that affects the button directly.
  if (isValidElement(children)) {
    const childClassName = children.props.className || '';
    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassName} hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-400 ease-out`.trim()
    } as React.HTMLAttributes<HTMLElement>);
  }

  return <>{children}</>;
}
