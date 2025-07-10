import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validate credentials
    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      setError('');
      navigate('/setting');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <form onSubmit={handleLogin}>
              <div className="card shadow rounded-4 p-4">
                {/* Headings */}
                <h2 className="fw-bold mb-1">Sign in to your</h2>
                <h2 className="fw-bold mb-3">PopX account</h2>
                <p className="text-secondary mb-1">Lorem ipsum dolor sit amet,</p>
                <p className="text-secondary mb-4">consectetur adipiscing elit.</p>

                {/* Input Fields */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger py-2 text-center" role="alert">
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn fw-bold p-3 w-100 text-white"
                    style={{ backgroundColor: '#9a46f3' }}
                  >
                    Login
                  </button>
                </div>

                <p className="my-3" style={{padding:"0 0 60% 0"}}>
                  Not Have An Account?{' '}
                  <Link className="text-decoration-none" style={{ color: '#9a46f3' }} to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
