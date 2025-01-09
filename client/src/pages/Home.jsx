import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <Navbar /> 

      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-32 sm:py-24 md:py-32">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Unlock Your Learning Potential with EduTech
            </h2>
            <p className="text-lg sm:text-xl mb-6">
              Explore courses across various domains and take your career to the next level.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-lg font-semibold">
              <Link to='/login'>
              Start Learning Now
              </Link>
            
              
            </button>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section id="courses" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Featured Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to build modern websites and web applications using HTML, CSS, and JavaScript.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Explore</button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Data Science</h3>
                <p className="text-gray-700 mb-4">
                  Dive into data analysis, machine learning, and AI with practical projects and hands-on tutorials.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Explore</button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
                <p className="text-gray-700 mb-4">
                  Master SEO, social media marketing, and content creation to enhance your marketing skills.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Explore</button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose EduTech?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
                <p className="text-gray-700">
                  Learn from industry professionals with years of experience in their respective fields.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
                <p className="text-gray-700">
                  Engage with hands-on projects, quizzes, and discussions that make learning fun.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
                <p className="text-gray-700">
                  Learn at your own pace with 24/7 access to all courses and materials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-100 to-indigo-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">What Our Students Say</h2>
            <div className="flex flex-wrap justify-center space-x-6 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
                <p className="text-gray-700 mb-4">"EduTech transformed my career! The courses were insightful and easy to follow."</p>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
                <p className="text-gray-700 mb-4">"A fantastic learning platform. I got a job in data science after completing the course!"</p>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-sm text-gray-500">Data Scientist</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
                <p className="text-gray-700 mb-4">"I highly recommend EduTech for anyone looking to advance their skills."</p>
                <h4 className="font-semibold">Alex Brown</h4>
                <p className="text-sm text-gray-500">Digital Marketer</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
