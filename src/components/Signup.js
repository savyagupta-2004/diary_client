import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
  const [creds, setcreds] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handlechnage = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://diary-backend-alpha.vercel.app/api/auth/CreateUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: creds.name,
          email: creds.email,
          password: creds.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/login");
      props.showAlert("Please proceed to login", "success");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  };
  return (
    <>
      <h2>Sign up to Dear Diary</h2>
      <form className="container my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={handlechnage}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handlechnage}
            name="email"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handlechnage}
            name="password"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={handlechnage}
            minLength={5}
            required
            name="cpassword"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
