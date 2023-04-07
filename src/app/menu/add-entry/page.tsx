'use client'
// components/AddEntry.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { INITIAL_VALUES } from './constants';


const EntrySchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  content: Yup.string().required('Content is required'),
  tags: Yup.string().required('Tags are required'),
});

const AddEntry: React.FC = () => {


  const handleSubmit = (values: EntryValues) => {
    // Aquí, manejarás el envío de datos al back-end.
  };

  return (
    <Formik initialValues={INITIAL_VALUES} validationSchema={EntrySchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" type="text" data-cy="input-title" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field id="description" name="description" type="text" data-cy="input-description" />
          <ErrorMessage name="description" />

          <label htmlFor="content">Content</label>
          <Field id="content" name="content" type="text" data-cy="input-content" />
          <ErrorMessage name="content" />

          <label htmlFor="tags">Tags (separated by comma)</label>
          <Field id="tags" name="tags" type="text" data-cy="input-tags" />
          <ErrorMessage name="tags" />

          <button type="submit" data-cy="btn--submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddEntry

