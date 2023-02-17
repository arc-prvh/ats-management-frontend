import React, { useState } from 'react';

import { useUser } from '@/contexts/userContext';
import { useAccessToken } from '@/contexts/authContext';

import axiosConfig from '@/utils/axiosConfig';

import FormWrapper from '@/components/formWrapper/formWrapper';
import Heading from '@/components/heading/heading';
import Form from '@/components/form/form';
import { SSelect, SMenuItem } from '@/components/form/form.style';
import Modal from '@/components/modal/modal';
import Spinner from '@/components/spinner/spinner';

function JobForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (obj, reason) => {
    if (reason === 'backdropClick') return;
    setOpen(false);
  };
  const user = useUser();
  const accessToken = useAccessToken();
  const [multiple, setMultiple] = useState([]);

  function multiSelectChangeHandler(event) {
    const {
      target: { value },
    } = event;
    setMultiple(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  }

  async function postJob(input) {
    try {
      const { description, ...data } = input;
      const response = await axiosConfig.post(`/job/insert`, {
        ...data,
        jobDescription: description,
        clientId: user.userId,
        agencyId: user.agencyId,
        skills: multiple.join(','),
      });

      return response.status;
    } catch (error) {
      throw error.message;
    }
  }

  function submitHandler(valueObj, resetFn) {
    handleOpen();

    postJob(valueObj)
      .then(() => {
        resetFn();
        setMultiple([]);
      })
      .finally(() => setOpen(false));
  }

  console.log(user);
  console.log(accessToken);

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
      <Heading type="h3">Post Job</Heading>
      <Form
        formArr={[
          {
            label: 'Company Name',
            name: 'companyName',
            type: 'text',
          },
          {
            label: 'Location',
            name: 'location',
            type: 'text',
          },
          {
            label: 'Salary',
            name: 'ctc',
            type: 'number',
          },
          {
            label: 'Job Title',
            name: 'jobTitle',
            type: 'text',
          },
          {
            label: 'Company Logo',
            name: 'companyLogo',
            type: 'text',
          },
          {
            label: 'Description',
            name: 'description',
            type: 'textarea',
          },
        ]}
        onSubmit={submitHandler}
        submitBtn="Post"
      >
        <SSelect
          fullWidth
          placeholder={'Skills'}
          multiple
          onChange={(e) => multiSelectChangeHandler(e)}
          value={multiple}
          sx={{ margin: '1rem 0', maxWidth: '430px' }}
        >
          {['REACT', 'ANGULAR', 'C', 'C#'].map((value, i) => (
            <SMenuItem key={i} value={value}>
              {value}
            </SMenuItem>
          ))}
        </SSelect>
      </Form>
    </FormWrapper>
  );
}

export default JobForm;
