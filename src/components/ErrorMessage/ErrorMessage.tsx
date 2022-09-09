import React from 'react';
import { ErrorMessageProps } from './ErrorMessage.props';
import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({error}: ErrorMessageProps) => {
  return (
    <p className={styles.error}>{error}.</p>
  );
}
