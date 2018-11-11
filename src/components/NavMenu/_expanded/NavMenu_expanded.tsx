import { cn } from '@bem-react/classname';
import { withBemMod, IClassNameProps } from '@bem-react/core';
import './NavMenu_expanded.css';
import { cnNavMenu } from '../NavMenu';

interface NavMenuWithModProps extends IClassNameProps {
  expanded?: boolean;
}

export default withBemMod<NavMenuWithModProps>(cnNavMenu(), { expanded: true });
