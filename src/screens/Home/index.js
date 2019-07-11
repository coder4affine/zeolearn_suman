import React, { Component } from 'react';
import PropTypes from 'prop-types';

class index extends Component {
  state = {
    courses: [],
    authors: [],
  };

  constructor(props) {
    super(props);
    this.loadData();
  }

  loadData = async () => {
    const res = await Promise.all([
      fetch('http://localhost:3004/courses'), // 3 sec
      fetch(' http://localhost:3004/authors'), // 2 sec
    ]); // 2 sec

    const data = await Promise.all([res[0].json(), res[1].json()]); // 1sec

    this.setState({
      courses: data[0],
      authors: data[1],
    });
  };

  getAuthor = id => {
    const { authors } = this.state;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  addCourse = () => {
    const { history } = this.props;
    history.push('/about');
  };

  render() {
    const { courses } = this.state;
    console.log(this.props);
    return (
      <div>
        <button type="button" onClick={this.addCourse}>
          Add Course
        </button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Author</th>
              <th>Length</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <a href={course.watchHref}>Link</a>
                </td>
                <td>{this.getAuthor(course.authorId)}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

index.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default index;
