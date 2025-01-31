import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={course.courseUrl} className="btn btn-secondary">View Course</a>
    </div>
  );
};

export default CourseCard;
