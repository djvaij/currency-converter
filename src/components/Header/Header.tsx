import React, { FunctionComponent } from 'react';
import { CurrencyInfo } from '../../components';
import Spinner from 'react-spinkit';
import { DollarSign, EuroSign } from '../../components';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';


const Loader: FunctionComponent = () => (
  <Spinner name="ball-beat" color="purple" style={{ width: 25, height: 25, transform: 'rotate(90deg)' }} />
);

const Content: FunctionComponent<HeaderProps> = ({currencies}) => {
  if (!currencies) return null;

  const {USD, EUR} = currencies;

  return (
    <>
      <CurrencyInfo rate={USD.rate} text={USD.txt} icon={<DollarSign size={24} color="#eeeeee" />} />
      <CurrencyInfo rate={EUR.rate} text={EUR.txt} icon={<EuroSign size={24} color="#eeeeee" />} />
    </>
  );
};

export const Header: FunctionComponent<HeaderProps> = ({currencies}) => {
  return (
    <header className={styles.header}>
      {!currencies ? <Loader /> : <Content currencies={currencies} />}
    </header>
  );
}
