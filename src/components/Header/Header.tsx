import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps, compose } from '@bem-react/core';
import { Logo } from '../Logo/Logo';
import { NavMenu } from '../NavMenu/NavMenu';
import { NavMenuExpanded } from '../NavMenu/_expanded/NavMenu_expanded';
import { ShowMenuBtn } from '../ShowMenuBtn/ShowMenuBtn';
import './Header.css';

const cnHeader = cn('Header');

export interface HeaderState {
  menuExpanded: boolean;
}

const NavMenuWithMod = compose(NavMenuExpanded)(NavMenu);

export class Header extends React.PureComponent<IClassNameProps, HeaderState> {
  constructor(props: IClassNameProps) {
    super(props);
    this.state = { menuExpanded: false };
  }

  private toggleMenu = () => {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }

  public render() {
    const { className } = this.props;
    const { menuExpanded } = this.state;

    return (
      <header className={cnHeader(null, [className])}>
        <Logo className={cnHeader('Logo')} />
        <nav className={cnHeader('Nav')}>
          <NavMenuWithMod className={cnHeader('NavMenu')} expanded={menuExpanded} />
        </nav>
        <ShowMenuBtn className={cnHeader('ShowMenuBtn')} handleClick={this.toggleMenu}/>
      </header>
    );
  }
}
