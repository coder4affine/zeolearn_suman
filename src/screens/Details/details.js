/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeContext } from '../../context/themeContext';

const index = ({ changeTheme, theme }) => {
  console.log(theme);
  changeTheme('dark');
  return (
    <div>
      <h1>Details Page</h1>
      <ThemeContext.Consumer>
        {value => {
          return <h1>{value.theme}</h1>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
};

export default index;
