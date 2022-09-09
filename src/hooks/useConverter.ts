import { useEffect, useState } from 'react';

export function useConverter(rates: any) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [fromPrice, setFromPrice] = useState<string>("0");
  const [toPrice, setToPrice] = useState<string>("0");

  const onChangeFromPrice = (value: string) => {
    if (!rates) return;

    if (value === "") {
      setFromPrice(value);
      setToPrice("0");
      return;
    }

    const price = parseFloat(value) / rates[fromCurrency];
    const fullResult = price * rates[toCurrency];
    const roundedResult = (Math.round(fullResult * 100) / 100).toString();

    setFromPrice(value);
    setToPrice(roundedResult);
  };

  const onChangeToPrice = (value: string) => {
    if (!rates) return;

    if (value === "") {
      setFromPrice("0");
      setToPrice(value);
      return;
    }

    const fullResult =
      (rates[fromCurrency] / rates[toCurrency]) * parseFloat(value);
    const roundedResult = (Math.round(fullResult * 100) / 100).toString();

    setFromPrice(roundedResult);
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice,
    onChangeFromPrice,
    onChangeToPrice,
  };
}