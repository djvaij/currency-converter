import React, { useState } from 'react';
import { useCurrency } from './hooks/useCurrency';
import { ConverterBlock, InfoPanel, MoneyTransferIcon } from './components';
import { Header } from './layout';
import { Main } from './layout';

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');

  const { currencies, error, loading } = useCurrency();

  return (
    <div className="app">
      <Header>
        <InfoPanel currencies={currencies} />
      </Header>
      <Main>
        <ConverterBlock activeCurrency={fromCurrency} onChangeCurrency={setFromCurrency} />
        <MoneyTransferIcon size={62} color="#444444" />
        <ConverterBlock activeCurrency={toCurrency} onChangeCurrency={setToCurrency} />
      </Main>
    </div>
  );
}

export default App;
