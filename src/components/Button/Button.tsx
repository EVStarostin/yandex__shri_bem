import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Button.css';

export const cnButton = cn('Button');

export class Button extends React.PureComponent<IClassNameProps> {
  public render() {
    const { children, className } = this.props;

    return (
      <button className={cnButton(null, [className])}>
        {children}
      </button>
    );
  }
}
