

import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  errorMessage: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, errorMessage }) => {
  const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

           const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <form className="w-full" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            required 
          />
        </div>
           <button type="submit"className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
