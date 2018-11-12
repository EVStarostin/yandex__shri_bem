import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import { EventsList } from '../EventsList/EventsList';
import './Main.css';

const cnMain = cn('Main');

export const Main: React.SFC<IClassNameProps> = ({ className }) => {
  return (
    <main className={cnMain(null, [className])}>
      <h1 className={cnMain('Heading')}>Лента событий</h1>
      <EventsList />
    </main>
  );
};
