import React, { FC } from 'react';
import { CurrencyInfo } from '..';
import { DollarSign, EuroSign } from '..';
import { InfoPanelProps } from './InfoPanel.props';
import { Loader } from '../Loader/Loader';


const Content: FC<InfoPanelProps> = ({rates}) => {
  if (!rates) return null;

  return (
    <>
      <CurrencyInfo rate={rates.UAH} text="USD" icon={<DollarSign size={24} color="#eeeeee" />} />
      <CurrencyInfo rate={(rates.UAH / rates.EUR)} text="EURO" icon={<EuroSign size={24} color="#eeeeee" />} />
    </>
  );
};

export const InfoPanel: FC<InfoPanelProps> = ({rates}) => {
  return (
    <>
      {!rates ? <Loader /> : <Content rates={rates} />}
    </>
  );
}
