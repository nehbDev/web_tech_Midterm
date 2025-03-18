import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 sm:py-8">
      <div className="max-w-md sm:max-w-2xl md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Resort Name */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4">
          Residencia del Hamor
        </h3>

        {/* Contact Info */}
        <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
          📞 +1 (555) 123-4567 | ✉️ reservations@residenciadelhamor.com
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242 1.24 3.608 1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-2.957.414-4.118 1.575C1.774 2.808 1.433 4.138 1.36 5.765c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.414 2.957 1.575 4.118 1.161 1.161 2.491 1.502 4.118 1.575 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 2.957-.414 4.118-1.575 1.161-1.161 1.502-2.491 1.575-4.118.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.414-2.957-1.575-4.118-1.161-1.161-2.491-1.502-4.118-1.575-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs sm:text-sm">
          © 2025 Residencia del Hamor. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          Bhencyris John Sagaral. BSIT-3A
        </p>
      </div>
    </footer>
  );
};

export default Footer;