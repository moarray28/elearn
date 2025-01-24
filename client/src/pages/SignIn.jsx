import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
  
    try {
      const response = await axios.post(`${backendUrl}/signin`, {
        username,
        password,
      });
  
      const { token, userType, message } = response.data;
  
      // Store the token in localStorage (or sessionStorage for session-based storage)
      localStorage.setItem('token', token);
  
      // Redirect based on user type
      if (userType === 'student') {
        navigate('/student'); // Redirect to student profile page
      } else if (userType === 'teacher') {
        navigate('/teacher'); // Redirect to teacher profile page
      }
  
      setMessage(message);
      setUsername('');
      setPassword('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
    return (
    <>
      <Navbar />
      <div className="relative loginimage flex justify-center items-center min-h-screen ">
        {/* Sign-In Form */}
        <div className="relative z-10 w-full mx-4 max-w-md p-6 bg-slate-100 rounded-xl shadow-2xl shadow-black">
          <h2 className="text-2xl font-bold mb-6 text-center text-cobalt-depth">Sign In</h2>
          <form onSubmit={handleSignIn}>
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
              <label className="block text-sm font-medium text-cobalt-depth">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cobalt-depth focus:border-cobalt-depth"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-golden-ember text-skyline-blue font-semibold rounded-lg hover:bg-golden-ember-dark"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center ${loading ? 'text-gray-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="text-cobalt-depth hover:text-cobalt-dark">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
