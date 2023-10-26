import React from "react";
import { FaFlag, FaCaretDown } from "react-icons/fa";

function Profile() {
  return (
    <div
      className="max-w-md mx-auto p-4 space-y-4 text-center"
      style={{
        zIndex: -111,
      }}
    >
      <h1 className="text-3xl font-semibold text-gray-400">My Profile</h1>

      <div>
        <label htmlFor="name" className="block text-left p-1 text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border rounded-lg"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-left p-1 text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border rounded-lg"
          placeholder="Your Email"
        />
      </div>

      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-left p-1 text-gray-600"
        >
          Phone Number
        </label>
        <div className="flex items-center border rounded-lg">
          <div className="p-2 border-r">
            <select
              className="bg-white border-none appearance-none"
              id="countryCode"
            >
              <option value="ind">+91</option>
              {/* <option value="uk">+44 (UK)</option> */}
              {/* Add more country codes as needed */}
            </select>
          </div>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full p-2"
            placeholder="Your Phone Number"
          />
        </div>
      </div>

      <button className="bg-gray-400 text-white p-3 rounded-lg w-full">
        Save
      </button>

      <a href="/logout" className="block mt-4 text-red-500">
        Logout
      </a>
    </div>
  );
}

export default Profile;
