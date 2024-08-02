import React, { useState, FormEvent } from 'react';
import axios from 'axios'; // Import axios for making API requests
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!fullname || !username || !email || !password || agreement !== true) {
      alert('Please fill in all fields and agree to the terms.');
      return;
    }

    try {
      const response = await axios.post(`${domain}/user/register`, {
        username,
        email,
        password,
        fullname,
      });

      console.log('Signup successful:', response.data);
      navigate('/auth/log_in');

    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[80vh] text-white bg-cover bg-center">
      <div className="w-[420px] p-8 rounded-lg bg-transparent border-2 border-[#4d4d4d] backdrop-blur-md">
        <h1 className="text-center text-3xl">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="relative w-full h-[50px] my-6">
            <label htmlFor="username" className="ml-5">Username:</label>
            <input
              type="text"
              className="w-full h-full p-5 rounded-full bg-transparent border-3 border-[rgba(177,177,177,0.2)] text-white placeholder-[rgba(255,255,255,0.589)] focus:border-white"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative w-full h-[50px] my-6">
            <label htmlFor="fullname" className="ml-5">Full Name:</label>
            <input
              type="text"
              className="w-full h-full p-5 rounded-full bg-transparent border-3 border-[rgba(177,177,177,0.2)] text-white placeholder-[rgba(255,255,255,0.589)] focus:border-white"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>

          <div className="relative w-full h-[50px] my-6">
            <label htmlFor="email" className="ml-5">Email ID:</label>
            <input
              type="email"
              className="w-full h-full p-5 rounded-full bg-transparent border-3 border-[rgba(177,177,177,0.2)] text-white placeholder-[rgba(255,255,255,0.589)] focus:border-white"
              id="emailInput"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative w-full h-[50px] my-6">
            <label htmlFor="password" className="ml-5">Password:</label>
            <input
              type="password"
              className="w-full h-full p-5 rounded-full bg-transparent border-3 border-[rgba(177,177,177,0.2)] text-white placeholder-[rgba(255,255,255,0.589)] focus:border-white"
              id="passwordInput"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="my-8">
            <label htmlFor="agreement" className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
                className="mr-2"
                required
              />
              I agree to the <a href="https://google.com" className="text-white underline">terms and conditions.</a>
            </label>
          </div>

          <button
            className="w-full h-[45px] rounded-full bg-[#00BF62] text-black text-lg font-semibold shadow-md hover:bg-[#00a74a] focus:outline-none"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

