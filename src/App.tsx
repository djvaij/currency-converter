import React, { useEffect, useState } from "react";
import { useCurrency } from "./hooks/useCurrency";
import { ConverterBlock, InfoPanel, MoneyTransferIcon } from "./components";
import { Header } from "./layout";
import { Main } from "./layout";
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

function App() {
  const { rates, error } = useCurrency();

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
