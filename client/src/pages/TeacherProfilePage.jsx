import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TeacherProfilePage = () => {
  // State for profile information
  const [profileName, setProfileName] = useState("Sample Teacher");
  const [about, setAbout] = useState("Experienced educator with a passion for teaching.");
  const [qualification, setQualification] = useState("M.Sc. in Computer Science,M.B.A.");

  // State for file uploads (video and PDF)
  const [videoFile, setVideoFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  // Handler for profile information updates
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Here you can add your logic to update the profile information
    console.log("Profile Updated:", { profileName, about, qualification });
  };

  // Handler for file uploads
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-skyline-blue text-pure-white py-4 text-center">
          <h1 className="text-3xl font-bold">Teacher Profile</h1>
        </header>

        <div className="container mx-auto p-8">
          {/* Profile Information Section */}
          <div className="bg-pure-white p-6 border-2 border-skyline-blue rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-skyline-blue mb-4">Profile Information</h2>
            <form onSubmit={handleProfileUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">About</label>
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Write about yourself"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Qualification</label>
                <input
                  type="text"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your qualification"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-cobalt-depth text-pure-white font-semibold rounded-lg hover:bg-skyline-blue"
              >
                Update Profile
              </button>
            </form>
          </div>

          {/* Assignment Section */}
          <div className="bg-pure-white p-6 rounded-lg  my-4  border-2 border-skyline-blue shadow-md">
            <h2 className="text-2xl font-semibold text-skyline-blue mx-auto mb-4">Upload Teaching Materials</h2>

           
            <input type="text" placeholder="Title" className="text-md placeholder:text-gray-800 border-skyline-blue border-2 rounded-md p-2 h-3/4 w-full mb-3 " />

            <textarea placeholder="Description" className="text-md  placeholder:text-gray-800 border-skyline-blue border-2 rounded-md p-2 h-3/4 w-full mb-3" />


            <div className="mb-6">
              <label className="block text-sm font-medium  text-gray-700 mb-2">Upload Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border-2 file:border-skyline-blue file:rounded-md file:bg-cobalt-depth file:text-pure-white"
              />
              {videoFile && (
                <div className="mt-4 text-gray-700">
                  <strong>Video File:</strong> {videoFile.name}
                </div>
              )}
            </div>




            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload PDF</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfUpload}
                className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-skyline-blue file:rounded-md file:bg-cobalt-depth file:text-pure-white"
              />
              {pdfFile && (
                <div className="mt-4 text-gray-700">
                  <strong>PDF File:</strong> {pdfFile.name}
                </div>
              )}
            </div>

              <button className="text-md text-skyline-blue border-skyline-blue rounded-md border-2 p-2" >Add Course</button>
      
     
          </div>

          <div className="bg-pure-white p-6 rounded-lg my-8  border-2 border-skyline-blue shadow-md">
            <h2 className="text-2xl font-semibold text-skyline-blue mx-auto mb-4">Add Assignments</h2>

           
            <input type="text" placeholder="Title" className="text-md placeholder:text-gray-800 border-skyline-blue border-2 rounded-md p-2 h-3/4 w-full mb-3 " />

            <textarea placeholder="Description" className="text-md  placeholder:text-gray-800 border-skyline-blue border-2 rounded-md p-2 h-3/4 w-full mb-3" />





            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload PDF</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfUpload}
                className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-skyline-blue file:rounded-md file:bg-cobalt-depth file:text-pure-white"
              />
              {pdfFile && (
                <div className="mt-4 text-gray-700">
                  <strong>PDF File:</strong> {pdfFile.name}
                </div>
              )}
            </div>

              <button className="text-md text-skyline-blue border-skyline-blue rounded-md border-2 p-2" >Add Assignments</button>
  
          </div>



        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeacherProfilePage;
