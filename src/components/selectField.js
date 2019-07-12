/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const textField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  options,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={field.name}>
        Author
        <div>
          <select {...field} {...props}>
            <option value="">{placeholder}</option>
            {options &&
              options.map(x => (
                <option key={x.value} value={x.value}>
                  {x.label}
                </option>
              ))}
          </select>
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
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default textField;
