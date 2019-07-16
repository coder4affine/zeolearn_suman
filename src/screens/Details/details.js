/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeConsumer } from '../../context/themeContext';

const index = ({ changeTheme, theme }) => {
  console.log(theme);
  changeTheme('dark');
  return (
    <div>
      <h1>Details Page</h1>
      <ThemeConsumer>
        {value => {
          return <h1>{value.theme}</h1>;
        }}
      </ThemeConsumer>
    </div>
  );
};

export default index;
