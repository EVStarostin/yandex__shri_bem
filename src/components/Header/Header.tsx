import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Header.css';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu';
import ShowMenuBtn from '../ShowMenuBtn/ShowMenuBtn';

const cnHeader = cn('Header');

export interface HeaderState {
  menuExpanded: boolean;
}

class Header extends React.Component<IClassNameProps, HeaderState> {
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
          <NavMenu className={cnHeader('NavMenu')} expanded={menuExpanded}/>
        </nav>
        <ShowMenuBtn className={cnHeader('ShowMenuBtn')} handleClick={this.toggleMenu}/>
      </header>
    );
  }
}

export default Header;
