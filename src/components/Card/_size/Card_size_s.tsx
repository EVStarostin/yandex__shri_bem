import { withBemMod } from '@bem-react/core';
import './Card_size_s.css';
import { cnCard, CardProps } from '../Card';

interface CardWithModProps extends CardProps {
  size?: string;
}

export default withBemMod<CardWithModProps>(cnCard(), { size: 's' });
