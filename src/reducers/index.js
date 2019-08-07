import { combineReducers } from 'redux';
import locale from './localeReducer';
import theme1 from './themeReducer';
import courses from './coursesReducer';
import authors from './authorsReducer';
import loading from './loadingReducer';
import error from './errorReducer';
import items from './itemsReducer';

export default combineReducers({
  locale,
  theme1,
  courses,
  authors,
  loading,
  error,
  items,
});
