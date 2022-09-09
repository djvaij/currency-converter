import { useState, useEffect } from 'react';
import { fetchCurrency } from '../api/currency';
import { ICurrencyResponse } from './../types';
import { ICurrencyObject } from './../types/data';

export function useCurrency() {
  const [rates, setCurrencies] = useState<ICurrencyObject | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function getCurrencies() {
    try {
      setError('');
      setLoading(true);
      const data: ICurrencyResponse = await fetchCurrency();
      const result = { ...data.rates, 'USD': 1 };
      console.log(result);
      setCurrencies(result);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getCurrencies();
  }, []);

  return { rates, loading, error };

}