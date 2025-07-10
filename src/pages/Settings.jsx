import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Settings = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    image: 'vite.svg', // fallback/default image
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        name: parsedUser.name || '',
        email: parsedUser.email || '',
        image: 'vite.svg',
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); // Redirect to home (or login)
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5">
            <div className="card shadow-lg rounded-4 p-4 border-0">
            <h4 className='bg-white py-1 border-bottom border-dark mb-4'>Account Setting</h4>
              {/* Profile */}
              <div className="d-flex align-items-center mb-4">
                <img
                  src={user.image}
                  alt="profile"
                  style={{
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    border: '3px solid #9a46f3',
                  }}
                />
                <div className="ms-3">
                  <h4 className="mb-1 fw-bold text-dark">{user.name}</h4>
                  <p className="text-muted mb-0">{user.email}</p>
                </div>
              </div>

              {/* Description */}
              <div style={{margin:"0 0 50% 0"}}>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consectetur, nisl sit amet facilisis fringilla, sapien orci
                  ullamcorper eros, nec suscipit nunc justo eget purus. Nullam
                  vel lacus sed lorem viverra bibendum non sed nunc.
                </p>
              </div>

              {/* Logout Button */}
              <div className="d-grid">
                <button
                  onClick={handleLogout}
                  className="btn fw-bold text-white"
                  style={{
                    backgroundColor: '#dc3545',
                    padding: '12px',
                    fontSize: '16px',
                    borderRadius: '10px',
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
