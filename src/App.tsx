import React from "react";
import { useCurrency } from "./hooks/useCurrency";
import { ConverterBlock, InfoPanel, MoneyTransferIcon } from "./components";
import { Header } from "./layout";
import { Main } from "./layout";
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { useConverter } from './hooks/useConverter';

function App() {
  const { rates, error } = useCurrency();

  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromPrice,
    toPrice,
    onChangeFromPrice,
    onChangeToPrice,
  } = useConverter(rates);

  return (
    <div className="app">
      <Header>
        <InfoPanel rates={rates} />
      </Header>
      {error && <ErrorMessage error={error} />}
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
