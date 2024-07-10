import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-secondary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Dear Diary
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ fontWeight: "bold" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex" role="search">
                <div className="container mx-2 ">
                  <Link
                    className="btn btn-primary mx-2 btn-sm"
                    to="/login"
                    role="button"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm"
                    to="/signup"
                    role="button"
                  >
                    Signup
                  </Link>
                </div>
              </form>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={handlelogout}>
                Log out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
