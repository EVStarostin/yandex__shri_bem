import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './ShowMenuBtn.css';
import menuImg from './images/menu.svg';

const cnShowMenuBtn = cn('ShowMenuBtn');

export interface ShowMenuBtnProps extends IClassNameProps {
  handleClick?: () => void;
}

const ShowMenuBtn: React.SFC<ShowMenuBtnProps> = ({ className, handleClick }) => (
  <button
    className={cnShowMenuBtn(null, [className])}
    onClick={handleClick}
  >
    <img src={menuImg} alt="бургерное меню" />
  </button>
);

export default ShowMenuBtn;
