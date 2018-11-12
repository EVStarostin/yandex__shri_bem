import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Range.css';

export const cnRange = cn('Range');

export interface RangeProps extends IClassNameProps {
  min: number;
  max: number;
}

export const Range: React.SFC<RangeProps> = ({ className, min, max }) => (
  <input
    className={cnRange(null, [className])}
    type="range"
    min={min}
    max={max}
  />
);
