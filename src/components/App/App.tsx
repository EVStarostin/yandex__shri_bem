import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './App.css';
import Header from '../Header/Header';

const cnApp = cn('App');

const App: React.SFC<IClassNameProps> = ({ className }) => (
  <div className={cnApp(null, [className])}>
    <Header />
  </div>
);

export default App;