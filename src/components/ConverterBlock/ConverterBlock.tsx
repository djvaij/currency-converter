import React, { FunctionComponent } from 'react';
import { CurrencySelect } from '..';
import styles from './ConverterBlock.module.scss';
import { ConverterBlockProps } from './ConverterBlock.props';

export const ConverterBlock: FunctionComponent<ConverterBlockProps> = ({activeCurrency, onChangeCurrency}) => {
  return (
    <div className={styles.container}>
      <CurrencySelect activeCurrency={activeCurrency} onChangeCurrency={onChangeCurrency} />
      <input className={styles.input} type="number" />
    </div>
  );
};