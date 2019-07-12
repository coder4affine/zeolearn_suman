/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import TextField from '../../components/textField';
import SelectField from '../../components/selectField';

const index = ({ location: { state }, history: { goBack } }) => {
  const submit = async (values, actions) => {
    try {
      await fetch('http://localhost:3004/courses', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      actions.resetForm();
      goBack();
    } catch (error) {
      actions.setErrors({ general: error.message });
    } finally {
      actions.setSubmitting(false);
    }
    // console.log(values);
    // console.log(actions);
    // setTimeout(() => {
    //   actions.setErrors({ general: 'Oops! something went wrong' });
    //   actions.setSubmitting(false);
    // }, 2000);
  };

  const validateCourse = values => {
    const error = {};
    if (!values.title) {
      error.title = 'Require';
    } else if (values.title.length < 2) {
      error.title = 'To less';
    } else if (values.title.length > 50) {
      error.title = 'To much';
    }
    if (!values.watchHref) {
      error.watchHref = 'Require';
    }
    if (!values.authorId) {
      error.authorId = 'Require';
    }
    if (!values.length) {
      error.length = 'Require';
    }
    if (!values.category) {
      error.category = 'Require';
    }
    return error;
  };

  let options = [];
  if (state.authors) {
    options = state.authors.map(author => ({
      value: author.id,
      label: `${author.firstName} ${author.lastName}`,
    }));
  }

  const formFields = [
    {
      name: 'title',
      label: 'Title',
      component: TextField,
    },
    {
      name: 'watchHref',
      label: 'Link',
      component: TextField,
    },
    {
      name: 'authorId',
      label: 'Author',
      component: SelectField,
      placeholder: 'Select Author',
      options,
    },
    {
      name: 'length',
      label: 'Length',
      component: TextField,
    },
    {
      name: 'category',
      label: 'Category',
      component: TextField,
    },
  ];

  return (
    <Formik initialValues={state.course} validate={validateCourse} onSubmit={submit}>
      {({ handleSubmit, isSubmitting, errors }) => (
        <form onSubmit={handleSubmit}>
          {errors.general && <div style={{ fontSize: 10, color: 'red' }}>{errors.general}</div>}
          {formFields.map(x => (
            <Field key={x.name} {...x} />
          ))}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding Course....' : 'Add Course'}
          </button>
        </form>
      )}
    </Formik>
  );
};

index.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      authors: PropTypes.array.isRequired,
      course: PropTypes.shape({
        title: PropTypes.string.isRequired,
        watchHref: PropTypes.string.isRequired,
        authorId: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default index;
