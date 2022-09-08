import React, { FunctionComponent } from 'react';
import Spinner from 'react-spinkit';

export const Loader: FunctionComponent = () => (
  <Spinner name="ball-beat" color="purple" style={{ width: 25, height: 25, transform: 'rotate(90deg)' }} />
);
