import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { cnFooter } from '../Footer/Footer';
import './App.css';
import { RegistryConsumer } from '@bem-react/di';

export const cnApp = cn('App');

export const App: React.SFC = () => (
  <div className={cnApp()}>
    <Header />
    <Main />
    <RegistryConsumer>
      {registries => {
        const registry = registries[cnApp()];
        const Footer = registry.get(cnFooter());
        return <Footer />;
      }}
    </RegistryConsumer>
  </div>
);
