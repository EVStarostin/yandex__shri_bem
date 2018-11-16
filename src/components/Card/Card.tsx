import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Card.css';

export const cnCard = cn('Card');

export interface CardProps extends IClassNameProps {
  cardInfo: {
    type: string;
    icon: string;
    title: string;
    source: string;
    time: string;
  };
};

export const Card: React.SFC<CardProps> = ({ className, cardInfo, children }) => {
  const { type, icon, title, source, time } = cardInfo;

  return (
    <li className={cnCard(null, [className])} tabIndex={0}>
      <div className={cnCard('Info')}>
        {type === 'critical' && <span className={cnCard('Critical')}>Критичное событие</span>}
        <div className={cnCard('Heading')}>
          <img className={cnCard('Icon')} src={icon} alt={source} aria-hidden="true"/>
          <h3 className={cnCard('Title')}>{title}</h3>
        </div>
        <div className={cnCard('SourceAndTime')}>
          <p className={cnCard('Source')}>{source}</p>
          <p className={cnCard('Time')}>{time}</p>
        </div>
      </div>
      {children}
      <button className={cnCard('CloseBtn')} aria-label="Закрыть" />
      <button className={cnCard('OpenBtn')} aria-label="Перейти"/>
    </li>
  );
};
