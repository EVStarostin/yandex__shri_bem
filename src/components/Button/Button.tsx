import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Button.css';

export const cnButton = cn('Button');

const Button: React.SFC<IClassNameProps> = ({ className, children }) => (
  <button className={cnButton(null, [className])}>
    {children}
  </button>
);

export default Button;
