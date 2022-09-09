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

  // Allow only decimal numbers or numbers with comma or dot.
  const updateNumber = (e: any) => {
    const val = e.target.value.replace(',', '.');

    if (val.indexOf('.') !== val.lastIndexOf('.')) {
      console.log(`val.indexOf('.') !== val.lastIndexOf('.')`);
      
      return;
    }

    if (val[val.length - 1] === '.' || val[val.length - 1] === ',') {
      onChangeValue(val);
    }
    
    // If the current value passes the validity test then apply that to state
    if (e.target.validity.valid) onChangeValue(e.currentTarget.value);
    // If the current val is just the negation sign, or it's been provided an empty string,
    // then apply that value to state - we still have to validate this input before processing
    // it to some other component or data structure, but it frees up our input the way a user
    // would expect to interact with this component
    else if (val === '' || val === '-') onChangeValue(val);
  }

  const onFocus = (e: any) => {
    console.log(e.target.value.indexOf('0'));
    
    if (e.target.value.indexOf('0') === 0) {
      onChangeValue(e.target.value.substring(1));
    }
  };


  return (
    <div className={styles.container}>
      <CurrencySelect activeCurrency={activeCurrency} onChangeCurrency={onChangeCurrency} />
      <input
        type="text"
        pattern="^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$"
        className={styles.input}
        value={inputValue}
        onChange={(e: any) => updateNumber(e)}
        onFocus={onFocus}
      />
    </div>
  );
};