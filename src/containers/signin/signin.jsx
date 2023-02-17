import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useUpdateAccessToken } from '@/contexts/authContext';
import { useUpdateUser } from '@/contexts/userContext';

import postData from '@/utils/authenticate';
import userPath from '@/utils/userPath';

import FormWrapper from '@/components/formWrapper/formWrapper';
import Heading from '@/components/heading/heading';
import Form from '@/components/form/form';
import Modal from '@/components/modal/modal';
import Spinner from '@/components/spinner/spinner';

function Signin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (obj, reason) => {
    if (reason === 'backdropClick') return;
    setOpen(false);
  };
  const setAccessToken = useUpdateAccessToken();
  const setUser = useUpdateUser();
  const navigate = useNavigate();

  function submitHandler(valueObj, resetFn) {
    const { email, password } = valueObj;

    handleOpen();

    postData({ email, password })
      .then((res) => {
        const { agencyId, email, role, userId } = res.user;

        setUser({ agencyId, email, role, userId });
        setAccessToken(res.access_token);
        localStorage.setItem('accessToken', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
        setOpen(false);
        resetFn();
        navigate(userPath(role));
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
      <Heading type="h3">Sign In</Heading>
      <Form onSubmit={submitHandler} />
    </FormWrapper>
  );
}

export default Signin;
