'use client';

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUserLoginMutation } from '@/redux/api/endpoints';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const result = await userLogin({ email, password }).unwrap();
      console.log(result);
      if (result.token) {
        localStorage.setItem('token', result.token);
        setSuccessMessage('Login successful! Redirecting you back to home page...');
        setTimeout(() => {
          router.push('/home');
        }, 2000);
      }
    } catch (error) {
      setErrorMessage((error as any).data.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cover flex flex-col md:flex-col lg:flex-row p-8 lg:p-12 lg:items-start justify-evenly items-center bg-[url('/assets/sign_in_page.png')]">
      <div className="flex flex-col items-center w-full mx-0 mb-4 md:mb-8 lg:mb-20 mt-0 p-4 md:p-10 lg:p-20 text-left">
        <div className="w-full py-2 md:py-3 lg:py-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#181435] font-bold flex items-center justify-center md:justify-start lg:justify-start space-x-2">
            <Image
              src="/assets/frame.png"
              alt="Logo Image"
              width={56}
              height={56}
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
            <span>
              <u>HibrLink</u>
              <p className="text-xs md:text-sm lg:text-sm font-light mt-1 text-gray-500">Connecting You to Everything, Everywhere</p>
            </span>
          </h1>
        </div>
        <section className="mt-10 md:mt-15 lg:mt-20 hidden md:block">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600">
            Connecting You to Everything, Everywhere
          </h2>
          <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-md lg:text-md text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </div>
      <div style={{ maxWidth: '500px' }} className="bg-white lg:ml-60 mt-16 p-10 rounded-3xl shadow-lg w-full lg:mr-20">
        <div className="text-[#084E9A] text-start">
          <p className="mb-2 text-sm">Welcome back!</p>
          <h3 className="text-lg font-bold text-gray-600 mb-4">Sign in</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            type='email'
            required
            placeholder='johnsondoe@nomail.com'
            className='w-full mb-4'
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl className='w-full mb-10' variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              required
            />
          </FormControl>
          {errorMessage && <div className="text-red-600 mb-4 text-center">{errorMessage}</div>}
          {successMessage && <div className="text-green-600 mb-4 text-center">{successMessage}</div>}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
          <div className='flex justify-center items-center mt-8 mb-4'>
            <div className='w-full h-px bg-gray-300' />
            <div className="px-4 text-gray-600  relative">Or</div>
            <div className='w-full h-px bg-gray-300' />
          </div>
          <div className="mb-1">
            <button
              type="button"
              className="w-full p-2 border border-gray-300 rounded flex items-center justify-center relative hover:bg-gray-100 transition duration-200"
            >
              <Image src="/assets/google.png" alt="Google Logo" width={16} height={16} className="absolute left-8" />
              <span className="flex-grow text-center">Sign in with Google</span>
            </button>
          </div>
          <div className="mb-1">
            <button
              type="button"
              className="w-full p-2 border border-gray-300 rounded flex items-center justify-center relative hover:bg-gray-100 transition duration-200"
            >
              <Image src="/assets/facebook.png" alt="Facebook Logo" width={16} height={16} className="absolute left-8" />
              <span className="flex-grow text-center">Sign in with Facebook</span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-full p-2 border border-gray-300 rounded flex items-center justify-center relative hover:bg-gray-100 transition duration-200"
            >
              <Image src="/assets/apple.png" alt="Apple Logo" width={16} height={16} className="absolute left-8" />
              <span className="flex-grow text-center">Sign in with Apple</span>
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <a href="/auth/signup" className="text-blue-500 hover:underline">No account? Sign Up Here</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
