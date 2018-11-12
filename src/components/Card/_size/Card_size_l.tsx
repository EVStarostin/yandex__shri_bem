import { withBemMod } from '@bem-react/core';
import { cnCard, CardProps } from '../Card';
import './Card_size_l.css';

interface CardWithModProps extends CardProps {
  size?: string;
}

export const CardSizeL = withBemMod<CardWithModProps>(cnCard(), { size: 'l' });
