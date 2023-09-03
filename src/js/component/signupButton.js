import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/signup'); 
  }

  return (
    <div className="me-2">
    <button className="btn btn-warning" onClick={handleLogin}>
      Signup
    </button>
    </div>
  );
}

export default SignupButton;