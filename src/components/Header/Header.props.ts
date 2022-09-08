interface CurrenciesObject {
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

interface CurrenciesObjects {
  [code: string]: CurrenciesObject
}

export interface HeaderProps {
  currencies: CurrenciesObjects;
}