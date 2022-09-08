import React, { useState } from 'react';
import { useCurrency } from './hooks/useCurrency';
import { ConverterBlock, InfoPanel } from './components';
import { Header } from './layout';
import { Main } from './layout';

function App() {
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [toCurrency, setToCurrency] = useState('USD');

  const { currencies, error, loading } = useCurrency();

  return (
    <div className="app">
      <Header>
        <InfoPanel currencies={currencies} />
      </Header>
      <Main>
        <ConverterBlock currency={fromCurrency} onChangeCurrency={setFromCurrency} />
        <ConverterBlock currency={toCurrency} onChangeCurrency={setToCurrency} />
      </Main>
    </div>
  );
}

export default App;
