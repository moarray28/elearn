import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const courses = [
  { id: 1, name: "Python", description: "Learn Python from scratch!" },
  { id: 2, name: "Java", description: "Master Java programming." },
  { id: 3, name: "JavaScript", description: "Become proficient in JavaScript." },
];

const CoursesPage = () => {
  return (
    <>  
    
    <Navbar/>
       <div className="p-8">
      <h1 className="text-3xl mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={`https://via.placeholder.com/400x200?text=${course.name}`}
              alt={course.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{course.name}</h3>
              <p className="text-gray-600">{course.description}</p>
              <Link
                to={`/course/${course.id}`}
                className="text-blue-500 mt-4 inline-block"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default CoursesPage;
