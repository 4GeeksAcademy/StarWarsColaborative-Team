import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); 
  }

  return (
    <div className="me-2">
    <button className="btn btn-warning" onClick={handleLogin}>
      Login
    </button>
    </div>
  );
}

export default LoginButton;