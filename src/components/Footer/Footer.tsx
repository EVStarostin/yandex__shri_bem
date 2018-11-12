import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export const cnFooter = cn('Footer');

export class Footer extends React.PureComponent<IClassNameProps> {
  public render() {
    const { className } = this.props;
    const footerLinks = [
      { id: 1, href: "#", target: '_self', title: "Помощь" },
      { id: 2, href: "#", target: '_self', title: "Обратная связь" },
      { id: 3, href: "#", target: '_self', title: "Разработчикам" },
      { id: 4, href: "#", target: '_self', title: "Условия использования" },
      {
        id: 5,
        href: "https://wiki.yandex.ru/shri-2018-II/homework/Adaptivnaja-vjorstka/.files/license.pdf",
        target: '_blank',
        title: "Лицензия на использования иконок"
      },
    ];

    return (
      <footer className={cnFooter(null, [className])}>
        <ul className={cnFooter('Links')}>
          {footerLinks.map(link => (
            <li key={link.id} className={cnFooter('Item')}>
              <a
                href={link.href}
                target={link.target}
                className={cnFooter('ItemLink')}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <p className={cnFooter('CopyRight')}>© 2001–2017 ООО «Яндекс»</p>
      </footer>
    );
  };
};
