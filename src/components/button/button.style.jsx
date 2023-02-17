import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
  text-transform: none;
  width: 100%;
  margin: 1rem 0;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
  padding: 1rem 0.5rem;
`;

export default StyledButton;
