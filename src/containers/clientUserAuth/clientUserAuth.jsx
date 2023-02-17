import React, { useState } from 'react';

import postData from '@/utils/authenticate';

import FormWrapper from '@/components/formWrapper/formWrapper';
import Heading from '@/components/heading/heading';
import Form from '@/components/form/form';
import Modal from '@/components/modal/modal';
import Spinner from '@/components/spinner/spinner';
import { useUser } from '@/contexts/userContext';

function ClientUserAuth() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (obj, reason) => {
    if (reason === 'backdropClick') return;
    setOpen(false);
  };
  const user = useUser();

  function submitHandler(valueObj, resetFn) {
    const { email, password, role } = valueObj;

    handleOpen();

    postData({ agencyId: user.userId, email, password, role: String(role) })
      .then(() => {
        setOpen(false);
        resetFn();
      })
      .catch((err) => {
        console.log(err.message);
        setOpen(false);
      });
  }

  return (
    <FormWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Spinner thickness={5} />
      </Modal>
      <Heading type="h3">Register</Heading>
      <Form
        formArr={[
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
          {
            label: 'Role',
            name: 'role',
            type: 'select',
            values: ['CLIENT', 'CANDIDATE'],
          },
        ]}
        onSubmit={submitHandler}
        submitBtn="Sign Up"
      />
    </FormWrapper>
  );
}

export default ClientUserAuth;
