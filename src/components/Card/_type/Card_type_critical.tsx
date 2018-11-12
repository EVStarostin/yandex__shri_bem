import { withBemMod } from '@bem-react/core';
import { cnCard, CardProps } from '../Card';
import './Card_type_critical.css';

interface CardWithModProps extends CardProps {
  type?: string;
}

export const CardTypeCritical = withBemMod<CardWithModProps>(cnCard(), { type: 'critical' });
