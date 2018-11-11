import { withBemMod } from '@bem-react/core';
import './Card_type_critical.css';
import { cnCard, CardProps } from '../Card';

interface CardWithModProps extends CardProps {
  type?: string;
}

export default withBemMod<CardWithModProps>(cnCard(), { type: 'critical' });
