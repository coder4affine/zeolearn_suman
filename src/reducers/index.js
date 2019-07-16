import { combineReducers } from 'redux';
import locale from './localeReducer';
import theme1 from './themeReducer';
import courses from './coursesReducer';
import authors from './authorsReducer';

export default combineReducers({
  locale,
  theme1,
  courses,
  authors,
});
