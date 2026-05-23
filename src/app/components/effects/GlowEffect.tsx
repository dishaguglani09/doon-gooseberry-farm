import React, { isValidElement } from 'react';

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export function GlowEffect({ children }: GlowEffectProps) {
  // We remove the square block-wrapper glow and replace it with 
  // a fluid, premium CSS shadow and brightness increase that perfectly hugs the element.
  if (isValidElement(children)) {
    const childClassName = children.props.className || '';
    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassName} hover:shadow-[0_8px_30px_rgba(28,58,43,0.15)] hover:brightness-105 transition-all duration-400 ease-out`.trim()
    } as React.HTMLAttributes<HTMLElement>);
  }

  return <>{children}</>;
}
