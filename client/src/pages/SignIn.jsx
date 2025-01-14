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
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        username,
        password,
      });

      // If sign-in is successful, route based on user type
      if (response.data.userType === 'student') {
        navigate('/student');  // Redirect to student profile page
      } else if (response.data.userType === 'teacher') {
        navigate('/teacher');  // Redirect to teacher profile page
      }

      setMessage(response.data.message);
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
      <div className="flex justify-center items-center min-h-screen mx-4 bg-pure-white">
        <div className="w-full max-w-md p-6 bg-pure-white shadow-2xl border-2 border-cobalt-depth rounded-lg">
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
