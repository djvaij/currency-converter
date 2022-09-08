import React, { FunctionComponent } from 'react';
import { CurrencyInfo } from '..';
import { DollarSign, EuroSign } from '..';
import { InfoPanelProps } from './InfoPanel.props';
import { Loader } from '../Loader/Loader';


const Content: FunctionComponent<InfoPanelProps> = ({currencies}) => {
  if (!currencies) return null;

  const {USD, EUR} = currencies;

  return (
    <>
      <CurrencyInfo rate={USD.rate} text={USD.txt} icon={<DollarSign size={24} color="#eeeeee" />} />
      <CurrencyInfo rate={EUR.rate} text={EUR.txt} icon={<EuroSign size={24} color="#eeeeee" />} />
    </>
  );
};

export const InfoPanel: FunctionComponent<InfoPanelProps> = ({currencies}) => {
  return (
    <>
      {!currencies ? <Loader /> : <Content currencies={currencies} />}
    </>
  );
}
