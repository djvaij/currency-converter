import { ICurrencyItem } from './../types/api';

export const fetchCurrency = async (): Promise<ICurrencyItem[]> => {
  const res = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  const json = await res.json();
  return json;
}
