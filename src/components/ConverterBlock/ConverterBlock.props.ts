import { Dispatch, SetStateAction } from 'react';

export interface ConverterBlockProps {
  inputValue: number | string;
  activeCurrency: string;
  onChangeValue: (value: string) => void;
  onChangeCurrency: Dispatch<SetStateAction<string>>;
}