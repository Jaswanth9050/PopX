import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage as string
    localStorage.setItem('user', JSON.stringify(formData));
    // Navigate to settings
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-4 col-lg-4">
            <form onSubmit={handleSubmit}>
              <div className="card shadow rounded-4 p-4 border-0" style={{ background: '#ffffff' }}>
                <h2 className="fw-bold text-center mb-3" style={{ color: '#2d2d2d' }}>
                  Create your PopX account
                </h2>

                {/* Full Name */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name">Full Name</label>
                </div>

                {/* Phone Number */}
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>

                {/* Email */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>

                {/* Password */}
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>

                {/* Company Name */}
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="company">Company Name</label>
                </div>

                {/* Are you Agency? */}
                <div className="mb-4">
                  <p className="fw-semibold mb-2">Are you an Agency?</p>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input border"
                        type="radio"
                        name="isAgency"
                        id="yes"
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.isAgency === 'Yes'}
                        required
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input border"
                        type="radio"
                        name="isAgency"
                        id="no"
                        value="No"
                        onChange={handleChange}
                        checked={formData.isAgency === 'No'}
                        required
                      />
                      <label className="form-check-label" htmlFor="no">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* Create Account Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn fw-bold p-3 w-100"
                    style={{ backgroundColor: '#9a46f3', color: 'white', fontSize: '16px' }}
                  >
                    Create Account
                  </button>
                </div>

                <p className="mt-2 text-center">
                  Already Have An Account?{' '}
                  <Link className="text-decoration-none" style={{ color: '#9a46f3' }} to="/login">
                    Login
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

export default CreateAccount;
