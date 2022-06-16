import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { Formik, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { formValues } from '../../interface/interface';
import { instance } from '../../helpers/helper.js';
import { useRouter } from 'next/router';

const articalSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title is too short!')
    .max(50, 'Title is too long!')
    .required('Title is required'),
  body: Yup.string().min(5, 'Body is too short!').required('Body is required'),
  authorEmail: Yup.string()
    .email('Please email a valid email')
    .required('Email is required'),
});

export default function AddArtical() {
  const router = useRouter();
  const initialValues: formValues = { title: '', authorEmail: '', body: '' };

  const { isError, isLoading, isSuccess, mutate, error } = useMutation(
    (values: formValues) => {
      return instance.post('/artical', values);
    }
  );

  if (isSuccess) router.push('/');

  return (
    <Box
      component='div'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      className='DBlock'>
      <div className='formDiv'>
        <h2>Add Artical</h2>
        {isError && (
          <div className='errorDiv'>
            {error?.response?.data?.error
              ? error?.response?.data?.error
              : error?.message}
          </div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={articalSchema}
          onSubmit={(values, actions) => mutate(values)}>
          {({ values, handleChange, handleBlur, isSubmitting }) => (
            <Form className='formInnerDiv shadow'>
              <div className='formGroup'>
                <TextField
                  variant='standard'
                  id='title'
                  label='Title'
                  type='text'
                  name='title'
                  className='w-full'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <ErrorMessage name='title' className='error' component='span' />
              </div>
              <div className='formGroup'>
                <TextField
                  variant='standard'
                  id='authorEmail'
                  label='Author Email'
                  type='email'
                  name='authorEmail'
                  className='w-full'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.authorEmail}
                />
                <ErrorMessage
                  name='authorEmail'
                  className='error'
                  component='span'
                />
              </div>
              <div className='formGroup'>
                <TextField
                  variant='standard'
                  id='body'
                  label='Body'
                  type='textarea'
                  name='body'
                  className='w-full'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                />
                <ErrorMessage name='body' className='error' component='span' />
              </div>
              <div className='formBtn'>
                <Button variant='contained' type='submit' disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Add Artical'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Box>
  );
}
