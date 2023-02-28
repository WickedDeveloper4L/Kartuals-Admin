import "./login.scss";
import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext";
const Login = () => {
  const [error, setError] = useState(false);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
    console.log(details);
  };
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = details;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setError(false);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        console.log("failure to log in");
        setError(true);
      });
  };

  return (
    <div className="login">
      <span className="title">Kartuals Admin</span>
      <div className="inputContainer">
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            placeholder="enter email"
            className="formInput"
            id="email"
            value={details.email}
            onChange={handleChange}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            placeholder="enter password"
            className="formInput"
            id="password"
            value={details.password}
            onChange={handleChange}
            name="password"
          />
          <div className="buttonContainer">
            <button type="submit">Login</button>
          </div>
        </form>
        {error && <h1 className="error">wrong email or password!</h1>}
      </div>
    </div>
  );
};

export default Login;
