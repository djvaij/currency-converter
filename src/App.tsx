import React, { useState } from 'react';
import { useCurrency } from './hooks/useCurrency';
import { ConverterBlock, InfoPanel, MoneyTransferIcon } from './components';
import { Header } from './layout';
import { Main } from './layout';

function App() {
  const { rates, error, loading } = useCurrency();

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const onChangeFromPrice = (value: string) => {
    if (!rates) return;
  
    const price = parseFloat(value) / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setFromPrice(parseFloat(value));
    setToPrice(Math.round(result * 100) / 100);
  };

  const onChangeToPrice = (value: string) => {
    if (!rates || !value) return;

    setToPrice(parseFloat(value));
  };

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
