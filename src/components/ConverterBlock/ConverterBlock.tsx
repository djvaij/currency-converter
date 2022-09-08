import React, { FunctionComponent } from 'react';
import { CurrencySelect } from '..';
import styles from './ConverterBlock.module.scss';
import { ConverterBlockProps } from './ConverterBlock.props';

export const ConverterBlock: FunctionComponent<ConverterBlockProps> = ({currency, onChangeCurrency}) => {
  return (
    <div className={styles.container}>
      <CurrencySelect />
      <input type="number" />
    </div>
  );
};