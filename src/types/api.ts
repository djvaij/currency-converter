import { ICurrencyObject } from './data';

export interface ICurrencyResponse {
  amount: number;
  base: string;
  date: string;
  rates: ICurrencyObject;
}
