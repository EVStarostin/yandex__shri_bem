import { cn } from '@bem-react/classname';
import { withBemMod } from '@bem-react/core';
import './Range_thumb_round.css';
import { cnRange, RangeProps } from '../Range';

interface RangeWithModProps extends RangeProps {
  thumb?: string;
}

export default withBemMod<RangeWithModProps>(cnRange(), { thumb: 'round' });
