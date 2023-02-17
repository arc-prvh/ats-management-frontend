import React from 'react';
import SModal from './modal.style';

function Modal({ children, open, handleClose }) {
  return (
    <SModal disableAutoFocus open={open} onClose={handleClose}>
      {children}
    </SModal>
  );
}

export default Modal;
