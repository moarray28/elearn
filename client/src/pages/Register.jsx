import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <>
      <Navbar />

      {/* Main container */}
      <div className="flex justify-center items-center min-h-screen bg-pure-white">
        {/* Registration form container */}
        <div className="w-full max-w-md p-6 bg-pure-white border-2 border-cobalt-depth shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-cobalt-depth">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-cobalt-depth">Username</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cobalt-depth focus:border-cobalt-depth"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-cobalt-depth">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cobalt-depth focus:border-cobalt-depth"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-cobalt-depth">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cobalt-depth focus:border-cobalt-depth"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium text-cobalt-depth">User Type</span>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="userType"
                    value="teacher"
                    checked={userType === 'teacher'}
                    onChange={() => setUserType('teacher')}
                    className="h-4 w-4 text-cobalt-depth"
                  />
                  <span>Teacher</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="userType"
                    value="student"
                    checked={userType === 'student'}
                    onChange={() => setUserType('student')}
                    className="h-4 w-4 text-cobalt-depth"
                  />
                  <span>Student</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-golden-ember text-cobalt-depth font-semibold rounded-lg hover:bg-golden-ember-dark"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-cobalt-depth hover:text-cobalt-dark">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Register;
