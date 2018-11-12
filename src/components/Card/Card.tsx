import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Card.css';

export const cnCard = cn('Card');

export interface CardProps extends IClassNameProps {
  cardHeading: {
    icon: string;
    title: string;
    source: string;
    time: string;
  };
};

export const Card: React.SFC<CardProps> = ({ className, cardHeading, children }) => {
  const { icon, title, source, time } = cardHeading;

  return (
    <li className={cnCard(null, [className])}>
      <button className={cnCard('CloseBtn')} />
      <button className={cnCard('OpenBtn')} />
      <div className={cnCard('Info')}>
        <div className={cnCard('Heading')}>
          <img className={cnCard('Icon')} src={icon} alt={source} />
          <h3 className={cnCard('Title')}>{title}</h3>
        </div>
        <div className={cnCard('SourceAndTime')}>
          <p className={cnCard('Source')}>{source}</p>
          <p className={cnCard('Time')}>{time}</p>
        </div>
      </div>
      {children}
    </li>
  );
};
