/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CoursesList = ({ courses, authors, editCourse, deleteCourse }) => {
  const getAuthor = id => {
    console.log(id, authors);
    throw new Error('Error From getAuthor');
    // const author = authors.find(x => x.id === id);

    // if (author) {
    //   return `${author.firstName} ${author.lastName}`;
    // }
    // return '';
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Link</th>
          <th>Author</th>
          <th>Length</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>
              <a href={course.watchHref}>Link</a>
            </td>
            <td>{getAuthor(course.authorId)}</td>
            <td>{course.length}</td>
            <td>{course.category}</td>
            <td>
              <button type="button" onClick={() => editCourse(course)}>
                Edit
              </button>
              <button type="button" onClick={() => deleteCourse(course)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  editCourse: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired,
};

export default CoursesList;
