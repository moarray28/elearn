import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ProfileDetails = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-600"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-lg text-gray-600">Web Development Enthusiast</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">About</h3>
          <p className="text-gray-600">
            I am passionate about coding and web development. I enjoy learning new technologies and building projects that solve real-world problems.
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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Enrolled Courses</h3>
        <div>
          {courses.map((course, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{course.title}</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">Progress: {course.progress}%</p>
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
      <Navbar/>
       <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">Student Profile</h1>
        </header>
  
        <div className="container mx-auto p-8">
          <ProfileDetails />
          <EnrolledCourses />
        </div>
  
        
      </div>

      <Footer/>
      </>

    );
  };
  
  export default ProfilePage;