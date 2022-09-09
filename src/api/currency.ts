import { ICurrencyResponse } from './../types';

const host = 'https://api.exchangerate.host';
const pathname = '/latest';
const queryParams = [
  'symbols=USD,EUR,UAH',
  'base=USD'
].join('&');


const url = `${host}${pathname}?${queryParams}`;

export const fetchCurrency = async (): Promise<ICurrencyResponse> => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
