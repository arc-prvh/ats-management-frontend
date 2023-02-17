import React from 'react';
import SSpinner from './spinner.style';

function Spinner({ thickness }) {
  return <SSpinner thickness={thickness || 3.6} />;
}

export default Spinner;
