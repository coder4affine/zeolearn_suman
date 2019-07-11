import React from 'react';
import { Link } from 'react-router-dom';
import route from '../route';

const header = () => {
  return (
    <nav>
      <ul>
        {route.map(x => {
          if (x.path) {
            return (
              <li key={x.path || 0}>
                <Link to={x.path}>{x.label}</Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
};

export default header;
