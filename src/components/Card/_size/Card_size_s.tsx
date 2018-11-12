import { withBemMod } from '@bem-react/core';
import { cnCard, CardProps } from '../Card';
import './Card_size_s.css';

interface CardWithModProps extends CardProps {
  size?: string;
}

export const CardSizeS = withBemMod<CardWithModProps>(cnCard(), { size: 's' });
