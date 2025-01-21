import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios'; // Axios for API calls
import  Lottie  from 'lottie-react'; // Lottie for animations
import backgroundAnimation from '../animations/background.json'; // Your Lottie animation file
import { useInView } from 'react-intersection-observer';

function Register() {
  


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

   

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(`${backendUrl}/register`, {
        username,
        email,
        password,
        userType,
      });

      setMessage(response.data.message || 'Registration successful!');
      setUsername('');
      setEmail('');
      setPassword('');
      setUserType('student');
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Something went wrong. Please try again.';
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen loginimage flex items-center justify-center">
        {/* Lottie Animation */}
         

        <div className="relative z-10 w-full mx-4 max-w-md p-6 bg-slate-100 rounded-xl  shadow-2xl shadow-black">
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
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center ${loading ? 'text-gray-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}
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
      
      <Footer />
    </>
  );
}

export default Register;
