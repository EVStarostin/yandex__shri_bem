import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import menuImg from './images/menu.svg';
import './ShowMenuBtn.css';

const cnShowMenuBtn = cn('ShowMenuBtn');

export interface ShowMenuBtnProps extends IClassNameProps {
  handleClick?: () => void;
  expanded: boolean;
}

export const ShowMenuBtn: React.SFC<ShowMenuBtnProps> = ({ className, handleClick, expanded }) => (
  <button
    className={cnShowMenuBtn(null, [className])}
    onClick={handleClick}
    aria-expanded={expanded}
  >
    <img src={menuImg} alt="Развернуть/свернуть меню" />
  </button>
);
