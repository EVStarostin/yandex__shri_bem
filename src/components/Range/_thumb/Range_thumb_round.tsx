import { withBemMod } from '@bem-react/core';
import { cnRange, RangeProps } from '../Range';
import './Range_thumb_round.css';

interface RangeWithModProps extends RangeProps {
  thumb?: string;
}

export const RangeThumbRound = withBemMod<RangeWithModProps>(cnRange(), { thumb: 'round' });
