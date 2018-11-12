import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import menuImg from './images/menu.svg';
import './ShowMenuBtn.css';

const cnShowMenuBtn = cn('ShowMenuBtn');

export interface ShowMenuBtnProps extends IClassNameProps {
  handleClick?: () => void;
}

export const ShowMenuBtn: React.SFC<ShowMenuBtnProps> = ({ className, handleClick }) => (
  <button
    className={cnShowMenuBtn(null, [className])}
    onClick={handleClick}
  >
    <img src={menuImg} alt="Бургерное меню" />
  </button>
);
