import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import logoImg from './images/logo.svg';

const cnLogo = cn('Logo');

class Logo extends React.Component<IClassNameProps> {
  public render() {
    const { className } = this.props;

    return (
      <a href="#" className={cnLogo(null, [className])}>
        <img src={logoImg} alt="Логотип Яндекса" />
      </a>
    );
  }
}

export default Logo;
