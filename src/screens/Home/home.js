/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from './form';
import CourseList from './coursesList';
import ErrorBoundary from '../../components/errorBoundary';
import { ThemeConsumer } from '../../context/themeContext';

const initialForm = {
  title: '',
  watchHref: '',
  length: '',
  category: '',
  authorId: '',
};

class index extends PureComponent {
  static propTypes = {
    changeLocale: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    submitCourseForm: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  state = {
    course: null,
    open: false,
  };

  constructor(props) {
    super(props);
    props.changeLocale({
      locale: 'en',
    });
    props.loadAuthors();
    props.loadCourses();
  }

  addCourse = () => {
    this.setState({ course: initialForm }, () => {
      this.toggleDialog();
    });
  };

  editCourse = course => {
    this.setState({ course }, () => {
      this.toggleDialog();
    });
  };

  toggleDialog = () => {
    this.setState(state => {
      return { open: !state.open };
    });
  };

  render() {
    const { course: initialData, open } = this.state;
    const { courses, authors, submitCourseForm, deleteCourse, loading, error } = this.props;

    if (loading) {
      return <h1>Loading....</h1>;
    }

    if (error) {
      return <h1>Oops! something went wrong!!</h1>;
    }

    return (
      <ErrorBoundary>
        <div>
          <ThemeConsumer>
            {value => {
              return (
                <div>
                  <h1>{value.theme}</h1>
                  <button type="button" onClick={() => value.changeTheme('dark')}>
                    Change Theme
                  </button>
                </div>
              );
            }}
          </ThemeConsumer>

          <button type="button" onClick={this.addCourse}>
            Add Course
          </button>
          <CourseList
            courses={courses}
            authors={authors}
            editCourse={this.editCourse}
            deleteCourse={deleteCourse}
          />
          {authors && initialData && (
            <dialog open={open}>
              <button type="button" onClick={this.toggleDialog}>
                Close
              </button>
              <Form authors={authors} course={initialData} submitCourseForm={submitCourseForm} />
            </dialog>
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

index.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default index;
