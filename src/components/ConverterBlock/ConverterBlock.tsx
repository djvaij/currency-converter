import React, { FC } from 'react';
import { CurrencySelect, NumericInput } from '..';
import styles from './ConverterBlock.module.scss';
import { ConverterBlockProps } from './ConverterBlock.props';

export const ConverterBlock: FC<ConverterBlockProps> = ({
  inputValue,
  activeCurrency,
  onChangeValue,
  onChangeCurrency,
}) => {
  return (
    <div className={styles.container}>
      <CurrencySelect activeCurrency={activeCurrency} onChangeCurrency={onChangeCurrency} />
      <NumericInput value={inputValue} onChange={onChangeValue} />
    </div>
  );
};