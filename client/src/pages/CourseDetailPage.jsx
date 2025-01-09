import React from "react";
import { useParams } from "react-router-dom";

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = { id: courseId, name: "Python", description: "Learn Python from scratch!" };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">{course.name} - Details</h1>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold">Course Description</h2>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default CourseDetailPage;
