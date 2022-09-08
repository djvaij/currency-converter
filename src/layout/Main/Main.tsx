import React, { FunctionComponent } from 'react';
import { MainProps } from './Main.props';
import styles from './Main.module.scss';

export const Main: FunctionComponent<MainProps> = ({children}) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};
