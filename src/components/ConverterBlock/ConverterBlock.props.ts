import { Dispatch, SetStateAction } from 'react';

export interface ConverterBlockProps {
  currency: string;
  onChangeCurrency: Dispatch<SetStateAction<string>>;
}