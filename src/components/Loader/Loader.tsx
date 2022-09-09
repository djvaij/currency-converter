import React, { FC } from 'react';
import Spinner from 'react-spinkit';

const style = {
  width: 25,
  height: 25,
  transform: 'rotate(90deg)',
};

export const Loader: FC = () => (
  <Spinner name="ball-beat" color="purple" style={style} />
);
