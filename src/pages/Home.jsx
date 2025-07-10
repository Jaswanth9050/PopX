import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-4 col-lg-4">
            <div className="card shadow rounded-4 p-4">
              {/* Circle */}
              <div
                className="circle-hover mx-auto mb-4 d-flex justify-content-center align-items-center"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  transition: "0.3s",
                  cursor: "pointer",
                  margin: "5% 0 0 0",
                }}
              >
                1
              </div>

              {/* Left-aligned text */}
              <div className="text-start" style={{ margin: "82% 0 0 0" }}>
                <h3 className="fw-bold text-dark mb-3">Welcome to PopX</h3>
                <p className="text-secondary mb-1">
                  Lorem ipsum dolor sit amet,
                </p>
                <p className="text-secondary mb-4">
                  consectetur adipiscing elit.
                </p>
              </div>

              {/* Buttons */}
              <div className="d-grid gap-3">
                <Link to={"/register"}>
                  <button
                    className="btn text-white fw-bold p-3 w-100"
                    style={{ backgroundColor: "darkviolet" }}
                  >
                    Create Account
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button
                    className="btn text-white fw-bold p-3 w-100"
                    style={{ backgroundColor: "navy" }}
                  >
                    Already Registered? Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect internal style */}
      <style>{`
        .circle-hover:hover {
          background-color: blue !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
