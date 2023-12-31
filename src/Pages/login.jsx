import React from 'react';


const LoginForm = () => {
  return (
    //bg-[#1e2a38]
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8 bg-[11827] text-white">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img
      className="mx-auto h-10 w-auto fill-[#00df9a]"
      src="https://tailwindui.com/img/logos/mark.svg?color=#00df9a&shade=600"
      alt="Your Company"
    /> */}
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#00df9a]">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
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
            required
            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-#00df9a focus:border-#00df9a sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#00df9a]">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-[#00df9a] hover:text-#00df9a">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-#00df9a focus:border-#00df9a sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className=" flex w-full justify-center rounded-md bg-[#00df9a] hover:bg-[#00c088] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a] mx-auto"
        >
          Log in
        </button>
      </div>
    </form>

    {/* <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?{' '}
      <a href="/signup" className="font-semibold leading-6 text-#00df9a hover:text-#00df9a">
        Create an Account
      </a>
    </p> */}
  </div>
</div>


  );
}

export default LoginForm;
