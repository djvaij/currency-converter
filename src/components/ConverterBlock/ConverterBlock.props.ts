import { Dispatch, SetStateAction } from 'react';

export interface ConverterBlockProps {
  activeCurrency: string;
  onChangeCurrency: Dispatch<SetStateAction<string>>;
}