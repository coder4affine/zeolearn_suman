import React from 'react';
import PropTypes from 'prop-types';

const textField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={field.name}>
        {label}
        <div>
          <input type="text" {...field} {...props} />
        </div>
      </label>
      {errors[field.name] && touched[field.name] && (
        <div style={{ fontSize: 10, color: 'red' }}>{errors[field.name]}</div>
      )}
    </div>
  );
};
textField.propTypes = {
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default textField;
