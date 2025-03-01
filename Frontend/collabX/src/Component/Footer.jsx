import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} CollabX. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gray-400">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-gray-400">
          Terms of Service
        </a>
        <a href="#" className="hover:text-gray-400">
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer