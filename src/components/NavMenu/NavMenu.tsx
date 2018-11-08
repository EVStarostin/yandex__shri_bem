import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './NavMenu.css';

const cnNavMenu = cn('NavMenu');

class NavMenu extends React.Component<IClassNameProps> {
  private menuItems = [
    { id: 1, href: "/", title: "События" },
    { id: 2, href: "#", title: "Сводка" },
    { id: 3, href: "#", title: "Устройства" },
    { id: 4, href: "#", title: "Сценарии" },
    { id: 5, href: "#", title: "Видеонаблюдение" },
  ];

  public render() {
    const { className } = this.props;
    const { pathname } = location;

    return (
      <ul className={cnNavMenu(null, [className])}>
        {this.menuItems.map(item => (
          <li key={item.id} className={cnNavMenu('Item')}>
            <a
              href={item.href}
              className={cnNavMenu('ItemLink', { active: item.href === pathname })}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavMenu;
