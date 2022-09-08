import React from 'react';
import { useCurrency } from './hooks/useCurrency';
import { InfoPanel } from './components';
import { Header } from './layout/Header/Header';

function App() {
  const { currencies, error, loading } = useCurrency();

  return (
    <div className="app">
      <Header>
        <InfoPanel currencies={currencies} />
      </Header>
    </div>
  );
}

export default App;
