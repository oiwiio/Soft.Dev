import React from 'react';
import './wave.scss';


export function WaveButton({ className = '', children, ...props }) {
  const combinedClassName = `wave-button ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

