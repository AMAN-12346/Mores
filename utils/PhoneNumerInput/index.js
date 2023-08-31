// components/PhoneNumberInput.js
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Styles from './index.module.css';

const PhoneNumberInput = ({ value, onChange, className }) => {
  return (
    <div className={className}>
      {/* <div className={Styles.flag}>{countryFlags[value?.split('-')[0]]}</div> */}
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={onChange}
        className={Styles.flag}
      />
    </div>
  );
};

export default PhoneNumberInput;
