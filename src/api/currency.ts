import { ICurrencyResponse } from './../types';

export const fetchCurrency = async (): Promise<ICurrencyResponse> => {
  const res = await fetch('https://api.exchangerate.host/latest?symbols=USD,EUR,UAH&base=USD');
  const json = await res.json();
  return json;
}
