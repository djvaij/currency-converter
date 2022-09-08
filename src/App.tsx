import React from 'react';
import { Header } from './components';
import { useCurrency } from './hooks/useCurrency';

function App() {
  const { currencies, error, loading } = useCurrency();

  // const currencies = {
  //   'USD': {
  //     txt: "Долар США",
  //     rate: 36.57,
  //     cc: 'USD',
  //     exchangedate: '08.09.2022',
  //   },
  //   'EUR': {
  //     txt: "Євро",
  //     rate: 37.65,
  //     cc: 'EUR',
  //     exchangedate: '08.09.2022',
  //   },
  // };

  return (
    <div className="app">
      <Header currencies={currencies} />
    </div>
  );
}

export default App;
