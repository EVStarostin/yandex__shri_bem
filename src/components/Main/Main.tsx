import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Main.css';
import EventsList from '../EventsList/EventsList';

const cnMain = cn('Main');

const Main: React.SFC<IClassNameProps> = ({ className }) => {
  return (
    <main className={cnMain(null, [className])}>
      <h1 className={cnMain('Heading')}>Лента событий</h1>
      <EventsList />
    </main>
  );
};

export default Main;
