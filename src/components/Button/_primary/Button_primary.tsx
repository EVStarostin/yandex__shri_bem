import { withBemMod, IClassNameProps } from '@bem-react/core';
import { cnButton } from '../Button';
import './Button_primary.css';

interface ButtonWithModProps extends IClassNameProps {
  primary?: boolean;
}

export const ButtonPrimary = withBemMod<ButtonWithModProps>(cnButton(), { primary: true });
