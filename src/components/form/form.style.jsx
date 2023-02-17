import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';

export const SFormControl = styled.div``;

export const SForm = styled.form`
  width: 100%;
`;

export const SInput = styled(TextField)`
  display: block;
  background-color: #fff;
  outline: none;
`;

export const SLabel = styled.label`
  display: block;
`;

export const SSelect = styled(Select)`
  background-color: #fff;
  outline: none;
  text-align: left;
`;

export const SMenuItem = styled(MenuItem)``;
