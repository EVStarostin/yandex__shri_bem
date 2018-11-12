import { withBemMod } from '@bem-react/core';
import { cnCard, CardProps } from '../Card';
import './Card_size_m.css';

interface CardWithModProps extends CardProps {
  size?: string;
}

export const CardSizeM = withBemMod<CardWithModProps>(cnCard(), { size: 'm' });
