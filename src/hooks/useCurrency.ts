import { useState, useEffect } from 'react';
import { fetchCurrency } from '../api/currency';
import { ICurrencyItem } from './../types';
import { formatCurrency } from './../utils/formateCurrency';
import { ICurrencyObject } from './../types/data';

export function useCurrency() {
  const [currencies, setCurrencies] = useState<ICurrencyObject | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  async function getCurrencies() {
    try {
      setError('');
      setLoading(true);
      const data: ICurrencyItem[] = await fetchCurrency();
      const formattedData: ICurrencyObject = formatCurrency(data);
      setCurrencies(formattedData);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getCurrencies();
  }, []);

  return { currencies, loading, error };

}