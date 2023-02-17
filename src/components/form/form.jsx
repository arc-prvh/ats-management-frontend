import React, { useState } from 'react';
import Button from '../button/button';
import { SForm, SFormControl, SInput, SSelect, SMenuItem } from './form.style';

function initialForm(arr) {
  return arr.reduce((obj, { name }) => {
    const newObj = { ...obj };
    newObj[name] = '';

    return newObj;
  }, {});
}

function Form({ formArr, submitBtn, onSubmit, children }) {
  const initialState = initialForm(formArr);
  const [form, setForm] = useState(initialState);

  console.log(form);

  function changeHandler(e, name) {
    setForm((prevState) => {
      const newState = { ...prevState };
      newState[name] = e.target.value;

      return newState;
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    onSubmit(form, () => setForm(initialState));
  }

  return (
    <SForm onSubmit={submitHandler}>
      {formArr.map(
        ({ name, label, type, values, disablingField, disablingCB }, index) => (
          <SFormControl key={index}>
            {type !== 'select' ? (
              <SInput
                id={name}
                name={name}
                type={type}
                disabled={disablingField && disablingCB(form[disablingField])}
                value={form[name]}
                fullWidth
                onChange={(e) => changeHandler(e, name)}
                margin="dense"
                label={label}
                sx={{ margin: '1rem 0', maxWidth: '430px' }}
              />
            ) : (
              <SSelect
                id={name}
                name={name}
                fullWidth
                // label={label}
                placeholder={label}
                onChange={(e) => changeHandler(e, name)}
                value={form[name]}
                sx={{ margin: '1rem 0', maxWidth: '430px' }}
              >
                {values.map((value, i) => (
                  <SMenuItem key={i} value={value}>
                    {value}
                  </SMenuItem>
                ))}
              </SSelect>
            )}
          </SFormControl>
        )
      )}
      {children}
      <Button type="submit">{submitBtn}</Button>
    </SForm>
  );
}

Form.defaultProps = {
  formArr: [
    {
      label: 'Email',
      name: 'email',
      type: 'text',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
    },
  ],
  submitBtn: 'Sign In',
};

export default Form;
