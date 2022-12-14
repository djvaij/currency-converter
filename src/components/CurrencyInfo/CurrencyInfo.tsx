import React, { FC } from 'react';
import { CurrencyInfoProps } from './CurrencyInfo.props';
import styles from './CurrencyInfo.module.scss';

export const CurrencyInfo: FC<CurrencyInfoProps> = ({
  rate,
  icon,
  text
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}:</span>
      <span className={styles.rate}>{rate.toFixed(2)}</span>
      {icon}
    </div>
  );
};
