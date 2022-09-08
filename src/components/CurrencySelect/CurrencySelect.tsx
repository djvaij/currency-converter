import React, { FunctionComponent } from 'react';
import styles from './CurrencySelect.module.scss';
import { DEFAULT_CURRENCIES } from '../../data/constants';
import classNames from 'classnames';
import { CurrencySelectProps } from './CurrencySelect.props';

export const CurrencySelect: FunctionComponent<CurrencySelectProps> = ({activeCurrency, onChangeCurrency}) => {
  console.log(activeCurrency);

  return (
    <ul className={styles.container}>
      {DEFAULT_CURRENCIES.map(item => (
        <li className={classNames(styles.item, {[styles.active]: activeCurrency === item})} key={item}>
          {item}
        </li>
      ))}
      <li className={classNames(styles.item, styles.chevronDown)}>
        <svg className={styles.chevronDownSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </li>
    </ul>
  );
}
