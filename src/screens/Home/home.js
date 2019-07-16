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
  };

  state = {
    courses: [],
    authors: [],
    course: null,
    open: false,
    error: false,
  };

  constructor(props) {
    super(props);
    props.changeLocale({
      locale: 'en',
    });
    props.loadAuthors();
    props.loadCourses();
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const res = await Promise.all([
      fetch('http://localhost:3004/courses'), // 3 sec
      fetch('http://localhost:3004/authors'), // 2 sec
    ]); // 2 sec

    const data = await Promise.all([res[0].json(), res[1].json()]); // 1sec

    this.setState({
      courses: data[0],
      authors: data[1],
    });
  };

  addCourse = () => {
    this.setState({ course: initialForm });
    this.toggleDialog();
  };

  editCourse = course => {
    this.setState({ course });
    this.toggleDialog();
  };

  deleteCourse = async course => {
    await fetch(`http://localhost:3004/courses/${course.id}`, {
      method: 'delete',
    });
    // this.loadData();

    this.setState(state => {
      return {
        courses: state.courses.filter(x => x.id !== course.id),
      };
    });
  };

  // redirect = course => {
  //   const { history } = this.props;
  //   const { authors } = this.state;
  //   history.push({
  //     pathname: '/about',
  //     state: {
  //       authors,
  //       course,
  //     },
  //   });
  // };

  toggleDialog = () => {
    this.setState(state => {
      return { open: !state.open };
    });
  };

  onAddCourse = course => {
    this.setState(state => {
      return { courses: [...state.courses, course] };
    });
    this.toggleDialog();
  };

  onUpdateCourses = course => {
    const { courses } = this.state;
    const i = courses.findIndex(x => x.id === course.id);
    this.setState({
      courses: [...courses.slice(0, i), course, ...courses.slice(i + 1)],
    });
    this.toggleDialog();
  };

  render() {
    const { courses, authors, course: initialData, open, error } = this.state;
    console.log(error);
    console.log(this.props);
    console.log('render');
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
            deleteCourse={this.deleteCourse}
          />
          {authors && initialData && (
            <dialog open={open}>
              <button type="button" onClick={this.toggleDialog}>
                Close
              </button>
              <Form
                authors={authors}
                course={initialData}
                onAddCourse={this.onAddCourse}
                onUpdateCourse={this.onUpdateCourses}
              />
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
