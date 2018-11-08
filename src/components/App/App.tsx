import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './App.css';
import Header from '../Header/Header';

const cnApp = cn('App');

class App extends React.Component<IClassNameProps> {
  public render() {
    const { className } = this.props;

    return (
      <div className={cnApp(null, [className])}>
        <Header />
      </div>
    );
  }
}

export default App;
