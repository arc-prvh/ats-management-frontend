import React, { useState, useCallback } from 'react';
import axios from 'axios';

import AutoComplete from '@/components/autoComplete/autoComplete';
import debounce from '@/utils/debounce';

function AutoCompleteContainer() {
  const [options, setOptions] = useState([]);

  function fetchOptions(value) {
    if (value)
      axios
        .get(`https://restcountries.com/v3.1/name/${value}`)
        .then((res) => res.data)
        .then((countries) => {
          const data = countries.map((country) => country?.name?.official);
          setOptions(data);
        });
    else setOptions([]);
  }

  function submitHandler(event, value) {
    console.log(value);
  }

  const optimisedFn = useCallback(debounce(fetchOptions), []);

  return (
    <AutoComplete
      options={options}
      label="Options"
      changeHandler={optimisedFn}
      submitHandler={submitHandler}
    />
  );
}

export default AutoCompleteContainer;
