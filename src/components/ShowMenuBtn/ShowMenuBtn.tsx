import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './ShowMenuBtn.css';
import menuImg from './images/menu.svg';

const cnShowMenuBtn = cn('ShowMenuBtn');

export interface ShowMenuBtnProps extends IClassNameProps {
  handleClick?: () => void;
}

class ShowMenuBtn extends React.Component<ShowMenuBtnProps> {
  public render() {
    const { className } = this.props;

    return (
      <button
        className={cnShowMenuBtn(null, [className])}
        onClick={this.props.handleClick}
      >
        <img src={menuImg} alt="бургерное меню" />
      </button>
    );
  }
}

export default ShowMenuBtn;
