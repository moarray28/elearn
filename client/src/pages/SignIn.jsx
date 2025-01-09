import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';  // Assuming you have a Footer component

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <>
      <Navbar />

      {/* Main container */}
      <div className="flex justify-center items-center min-h-screen m-2 bg-pure-white">
        {/* Sign-In form container */}
        <div className="w-full max-w-md p-6 bg-pure-white  shadow-2xl border-2 border-cobalt-depth rounded-lg">
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
            >
              Sign In
            </button>
          </form>
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

      <Footer />  {/* Footer component */}
    </>
  );
}

export default SignIn;
