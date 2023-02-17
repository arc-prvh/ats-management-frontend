import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SAutoComplete from './autoComplete.style';

function AutoComplete({ options, label, changeHandler, submitHandler }) {
  const [value, setValue] = useState('');

  function onInputChange(e, input, reason) {
    setValue(input);
    if (reason === 'input' || !input) changeHandler(input);
  }

  return (
    <SAutoComplete
      disablePortal
      filterOptions={(x) => x}
      value={value}
      onInputChange={onInputChange}
      onChange={submitHandler}
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

export default AutoComplete;
