import React, { FunctionComponent } from 'react';
import { CurrencySelect } from '..';
import styles from './ConverterBlock.module.scss';
import { ConverterBlockProps } from './ConverterBlock.props';

export const ConverterBlock: FunctionComponent<ConverterBlockProps> = ({
  inputValue,
  activeCurrency,
  onChangeValue,
  onChangeCurrency,

}) => {
  return (
    <div className={styles.container}>
      <CurrencySelect activeCurrency={activeCurrency} onChangeCurrency={onChangeCurrency} />
      <input
        type="number"
        className={styles.input}
        value={inputValue}
        onChange={(e: any) => onChangeValue(e.currentTarget.value)} />
    </div>
  );
};