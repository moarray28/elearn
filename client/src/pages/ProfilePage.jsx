import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfileDetails = () => {
  return (
    <div className="bg-pure-white p-6 border-2 border-skyline-blue rounded-lg shadow-lg mb-8">
      <div className="flex items-center space-x-6">
         
        <div>
          <h2 className="text-2xl font-semibold text-cobalt-depth">Ritesh More</h2>
          <p className="text-lg text-cobalt-dark">Web Development Enthusiast</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-cobalt-depth">About</h3>
        <p className="text-cobalt-dark">
          MCA student
        </p>
      </div>
    </div>
  );
};

// EnrolledCourses Component
const EnrolledCourses = () => {
  const courses = [
    {
      title: 'Web Development',
      progress: 70,
    },
    {
      title: 'Data Science',
      progress: 40,
    },
    {
      title: 'Digital Marketing',
      progress: 90,
    },
  ];

  return (
    <div className="bg-pure-white p-6 rounded-lg border-2 border-skyline-blue shadow-lg">
      <h3 className="text-xl font-semibold text-cobalt-depth mb-4">Enrolled Courses</h3>
      <div>
        {courses.map((course, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold text-cobalt-depth">{course.title}</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-cobalt-depth h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-cobalt-dark">Progress: {course.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ProfilePage Component (Main Profile Page)
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-pure-white min-h-screen">
        <header className="bg-cobalt-depth text-pure-white py-4 text-center">
          <h1 className="text-3xl font-bold">Student Profile</h1>
        </header>

        <div className="container mx-auto p-8">
          <ProfileDetails />
          <EnrolledCourses />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfilePage;
