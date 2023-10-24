import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const signUp = async (e) => { 
    e.preventDefault();
    await fetch('https://wm-backend.connecturbanspa.repl.co/client/register', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         "Access-Control-Allow-Origin": "*"       
       },
       body: JSON.stringify(formData),
     })
       .then((response) => {
         console.log('Signup successful!',response)
         setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
         })
         toast("SignUp Success");
       })
       .catch((error) => {
         console.error('Error subscribing to newsletter:', error);
         console.log(error)         
       });
   };


   const handleChange = (e) => {
    // Update the corresponding field in the state
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img
      className="mx-auto h-10 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=#00df9a&shade=600"
      alt="Your Company"
    />
    <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-[#00df9a]">
      Create a New account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6">

    <div>
        <label htmlFor="text" className="block text-sm font-medium leading-6 text-[#00df9a]">
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            value={formData.name}
        onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-#00df9a sm:text-sm sm:leading-6"
          />
        </div>
      </div>


      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#00df9a]">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
        onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-#00df9a sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#00df9a]">
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
        onChange={handleChange}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-#00df9a sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-[#00df9a]">
            Confirm Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
           onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-#00df9a sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
        disabled={formData.email==" " || formData.name==" " || formData.password==" " || formData.confirmPassword==" "?true:false}
        onClick={(e)=>{
          signUp(e)
        }}
          type="submit"
          className=" flex w-full justify-center rounded-md bg-[#00df9a] hover:bg-[#00c088] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a] mx-auto"
        >
          Sign Up
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already a member?{' '}
      <Link to="/login" className="font-semibold leading-6 text-#00df9a hover:text-#00c088">
        Log in
      </Link>
    </p>
  </div>
  <ToastContainer></ToastContainer>
</div>

    );
}

export default Signup;
