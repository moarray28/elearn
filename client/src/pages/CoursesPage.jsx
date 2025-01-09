import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const courses = [
  { id: 1, name: "Python", description: "Learn Python from scratch!" },
  { id: 2, name: "Java", description: "Master Java programming." },
  { id: 3, name: "JavaScript", description: "Become proficient in JavaScript." }, 
  { id: 4, name: "Python", description: "Learn Python from scratch!" },
  { id: 5, name: "Java", description: "Master Java programming." },
  { id: 6, name: "JavaScript", description: "Become proficient in JavaScript." },
];

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 bg-pure-white">
        <h1 className="text-3xl mb-6 text-cobalt-depth">Available Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="max-w-xs mx-auto m-3 bg-skyline-blue border-2  border-skyline-blue rounded-lg shadow-lg"
            >
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={`https://via.placeholder.com/400x200?text=${course.name}`}
                alt={course.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-golden-ember">{course.name}</h3>
                <p className="text-white">{course.description}</p>
                <Link
                  to={`/course/${course.id}`}
                  className="text-golden-ember mt-4 inline-block hover:text-white hover:bg-cobalt-depth py-2 px-4 rounded-lg transition duration-300"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
    
      </div>
      <Footer/>
    </>
  );
};

export default CoursesPage;
