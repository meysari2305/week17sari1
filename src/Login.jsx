import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3005/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'succes') {
          navigate('/home');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-1oo">
      <div className="bg-white p-3 rounded w-25">
        <h1>Meysari App</h1>
        <h2>Login page</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email" placeholder="Enter email" autoComplete="off" name="email" className="form-control rounded-o" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input type="password" placeholder="Enter password" autoComplete="off" name="password" className="form-control rounded-o" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
