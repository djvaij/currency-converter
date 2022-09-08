import React, { FunctionComponent } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header: FunctionComponent<HeaderProps> = ({children}) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  );
};
