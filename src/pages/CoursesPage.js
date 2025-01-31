import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../services/courseService';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      setCourses(fetchedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-page">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
