import React, { FocusEvent, ChangeEvent, FC } from "react";
import { NumericInputProps } from "./NumericInput.props";
import styles from "./NumericInput.module.scss";

export const NumericInput: FC<NumericInputProps> = ({ value, onChange }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(",", ".");

    if (val.indexOf(".") !== val.lastIndexOf(".")) {
      return;
    }

    if (val[val.length - 1] === "." || val[val.length - 1] === ",") {
      onChange(val);
    }

    // If the current value passes the validity test then apply that to state
    if (e.target.validity.valid) onChange(e.currentTarget.value);

    // If the current val is just the negation sign, or it's been provided an empty string,
    // then apply that value to state - we still have to validate this input before processing
    // it to some other component or data structure, but it frees up our input the way a user
    // would expect to interact with this component
    else if (val === "" || val === "-") onChange(val);
  };

  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.indexOf("0") === 0) {
      onChange(e.target.value.substring(1));
    }
  };

  return (
    <input
      type="text"
      pattern="^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$"
      className={styles.input}
      value={value}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
    />
  );
};
