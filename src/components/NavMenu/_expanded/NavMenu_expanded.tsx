import { cn } from '@bem-react/classname';
import { withBemMod, IClassNameProps } from '@bem-react/core';
import './NavMenu_expanded.css';

const cnNavMenu = cn('NavMenu');

interface NavMenuProps extends IClassNameProps {
  expanded?: boolean;
}

export default withBemMod<NavMenuProps>(cnNavMenu(), { expanded: true });
