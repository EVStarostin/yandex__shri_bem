import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon, cnApp } from './App';
import { cnFooter, Footer } from '../Footer/Footer@touch';
import { Card, cnCard } from '../Card/Card@touch';

const registry = new Registry({ id: cnApp() });

registry.set(cnFooter(), Footer);
registry.set(cnCard(), Card);

export const AppTouch = withRegistry(registry)(AppCommon);
