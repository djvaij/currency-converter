import React, { useEffect, useState } from 'react';
import { useCurrency } from './hooks/useCurrency';
import { ConverterBlock, InfoPanel, MoneyTransferIcon } from './components';
import { Header } from './layout';
import { Main } from './layout';

function App() {
  const { rates, error, loading } = useCurrency();

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');
  const [fromPrice, setFromPrice] = useState<string>('0');
  const [toPrice, setToPrice] = useState<string>('0');

  const onChangeFromPrice = (value: string) => {
    if (!rates) return;

    if (value === '') {
      setFromPrice(value);
      setToPrice('0');
      return;
    }

    setFromPrice(value);
    const price = parseFloat(value) / rates[fromCurrency];
    const result = price * rates[toCurrency];
    // setFromPrice(value);
    setToPrice((Math.round(result * 100) / 100).toString());
  };

  const onChangeToPrice = (value: string) => {
    if (!rates) return;

    if (value === '') {
      setFromPrice('0');
      setToPrice(value);
      return;
    }

    const result = (rates[fromCurrency] / rates[toCurrency]) * parseFloat(value);
    setFromPrice((Math.round(result * 100) / 100).toString());
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="app">
      <Header>
        <InfoPanel rates={rates} />
      </Header>
      <Main>
        <ConverterBlock
          inputValue={fromPrice}
          activeCurrency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
        />
        <MoneyTransferIcon size={62} color="#444444" />
        <ConverterBlock
          inputValue={toPrice}
          activeCurrency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
        />
      </Main>
    </div>
  );
}

export default App;
