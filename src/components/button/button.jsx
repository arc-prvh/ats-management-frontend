import React from 'react';

import StyledButton from './button.style';

function Button({ children, onClick, isDisabled, type = 'button' }) {
  function clickHandler() {
    if (onClick) onClick();

    return '';
  }

  return (
    <StyledButton
      disabled={isDisabled}
      onClick={clickHandler}
      variant="contained"
      type={type}
      maxWidth="430px"
    >
      {children}
    </StyledButton>
  );
}

export default Button;
