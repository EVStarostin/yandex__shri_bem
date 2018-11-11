import * as React from 'react';
import { cn } from '@bem-react/classname';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const cnApp = cn('App');

const App: React.SFC = () => (
  <div className={cnApp()}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
