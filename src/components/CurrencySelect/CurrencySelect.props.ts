import { Dispatch, SetStateAction } from 'react';

export interface CurrencySelectProps {
  activeCurrency: string;
  onChangeCurrency: Dispatch<SetStateAction<string>>;
}