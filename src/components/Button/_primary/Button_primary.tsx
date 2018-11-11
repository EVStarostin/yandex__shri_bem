import { cn } from '@bem-react/classname';
import { withBemMod, IClassNameProps } from '@bem-react/core';
import './Button_primary.css';
import { cnButton } from '../Button';

interface ButtonWithModProps extends IClassNameProps {
  thumb?: string;
}

export default withBemMod<ButtonWithModProps>(cnButton(), { primary: true });
