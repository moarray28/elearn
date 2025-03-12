import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Example data, replace with an actual API call or context if needed

const courses = [
  {
    id: 1,
    name: "Python",
    description: "Learn Python from scratch!",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
    studyMaterials: [
      { type: "PDF", name: "Python Basics", link: "https://example.com/python_basics.pdf" },
      { type: "Video", name: "Introduction to Python", link: "https://www.youtube.com/watch?v=videoID" },
      { type: "Article", name: "Python Advanced Concepts", link: "https://example.com/python_advanced_article" }
    ]
  },
  {
    id: 2,
    name: "Java",
    description: "Master Java programming.",
    video: "https://www.youtube.com/embed/xyz123", // Example video URL
    studyMaterials: [
      { type: "PDF", name: "Java Programming Guide", link: "https://example.com/java_guide.pdf" },
      { type: "Article", name: "Java Best Practices", link: "https://example.com/java_best_practices" },
      { type: "Video", name: "Java OOP Concepts", link: "https://www.youtube.com/watch?v=anotherVideoID" }
    ]
  },
  {
    id: 3,
    name: "JavaScript",
    description: "Become proficient in JavaScript.",
    video: "https://www.youtube.com/embed/abcdefg", // Example video URL
    studyMaterials: [
      { type: "PDF", name: "JavaScript Basics", link: "https://example.com/js_basics.pdf" },
      { type: "Article", name: "JavaScript ES6 Features", link: "https://example.com/js_es6_article" },
      { type: "Video", name: "JavaScript Deep Dive", link: "https://www.youtube.com/watch?v=deepDiveVideoID" }
    ]
  },
  {
    id: 4,
    name: "Ruby",
    description: "Learn Ruby programming from scratch!",
    video: "https://www.youtube.com/embed/hijklmn", // Example video URL
    studyMaterials: [
      { type: "PDF", name: "Ruby Beginner's Guide", link: "https://example.com/ruby_guide.pdf" },
      { type: "Article", name: "Ruby Advanced Techniques", link: "https://example.com/ruby_advanced_article" },
      { type: "Video", name: "Ruby On Rails Overview", link: "https://www.youtube.com/watch?v=railsOverviewID" }
    ]
  },
  {
    id: 5,
    name: "C++",
    description: "Master C++ programming.",
    video: "https://www.youtube.com/embed/987654", // Example video URL
    studyMaterials: [
      { type: "PDF", name: "C++ Syntax Guide", link: "https://example.com/cpp_syntax.pdf" },
      { type: "Video", name: "C++ Memory Management", link: "https://www.youtube.com/watch?v=cppMemoryManagementID" },
      { type: "Article", name: "C++ Best Practices", link: "https://example.com/cpp_best_practices" }
    ]
  },
  {
    id: 6,
    name: "PHP",
    description: "Become proficient in PHP.",
    video: "https://www.youtube.com/embed/opqrst", // Example video URL
    studyMaterials: [
      { type: "PDF", name: "PHP Basics", link: "https://example.com/php_basics.pdf" },
      { type: "Article", name: "PHP Object-Oriented Programming", link: "https://example.com/php_oop_article" },
      { type: "Video", name: "Advanced PHP Techniques", link: "https://www.youtube.com/watch?v=phpAdvancedTechniquesID" }
    ]
  }
];

const CourseDetailPage = () => {
  // Extract courseId from URL params
  const { courseId } = useParams();

  // Find the course that matches the courseId
  const course = courses.find((course) => course.id === parseInt(courseId));

  // If course not found, display a message
  if (!course) {
    return <h2>Course not found!</h2>;
  }

  return (
    
    <> 
      <Navbar/>

    <div className="p-8">
      <h1 className="text-4xl mb-6">{course.name} - Details</h1>
      
      
      {/* Video Section   rounded-lg shadow-xl shadow-neutral-500 border-skyline-blue border*/}
      <div className="   mx-auto p-6 mb-6 max-w-4xl">
  
  {/* Container for the iframe */}
  <div className="flex justify-center items-center">
    <iframe
      className="w-full rounded-lg h-80 sm:h-96 lg:h-[500px]"
      src={course.video}
      title={`${course.name} Introduction Video`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

{/* Course Description Section */}
<div className="bg-red-600 border rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold">Description</h2>
        <p>{course.description}</p>
      </div>


      {/* Study Materials Section */}
      <div className="bg-green-600 border rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold">Study Materials</h2>
        <ul className="list-disc pl-6">
          {course.studyMaterials.map((material, index) => (
            <li key={index} className="text-white">
              <a href={material.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {material.type}: {material.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default CourseDetailPage;
