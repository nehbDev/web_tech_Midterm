import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "../assets/images/main.webp";
import pool from "../assets/images/pool.webp";
import nightPool from "../assets/images/nightPool.webp";
import poolsunset from "../assets/images/poolsunset.webp";
import restaurant from "../assets/images/restaurant.webp";
import room2 from "../assets/images/room2.webp";
import room6 from "../assets/images/room6.webp";
import premium1 from "../assets/images/premium1.webp";
import beachView from "../assets/images/beachView.webp";
import buildingFront from "../assets/images/buildingFront.webp";
import waterActv from "../assets/images/waterActv.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Book() {
  const images = [main, room2, nightPool, premium1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });

    AOS.refresh();

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact) &&
      !/^\+?[1-9]\d{1,14}$/.test(formData.contact.replace(/\D/g, ""))
    ) {
      newErrors.contact = "Please enter a valid email or phone number";
    }

    if (!formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
    } else {
      const checkInDate = new Date(formData.checkIn);
      if (checkInDate < today) {
        newErrors.checkIn = "Check-in date cannot be in the past";
      }
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Check-out date is required";
    } else {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = "Check-out date must be after check-in date";
      }
    }

    if (!formData.roomType) {
      newErrors.roomType = "Please select a room type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        contact: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
      });
    }
  };

  const closeModal = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-poppins px-4 sm:px-6 md:px-8">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mx-4 sm:mx-10 font-bold mb-2 sm:mb-4 text-center"
            data-aos="fade-down"
          >
            Your Perfect Stay at Residencia Del Hamor Awaits
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-center"
            data-aos="fade-up"
          >
            Reserve Your Escape Where Serenity Meets Elegance.
          </p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full shadow-md transition"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full shadow-md transition"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Booking Form Section */}
      <div className="max-w-md sm:max-w-lg md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center"
          data-aos="fade-up"
        >
          Reserve Your Escape
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`border rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="contact"
              className="text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Contact (Email or Phone)
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className={`border rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base ${
                errors.contact ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email or phone"
            />
            {errors.contact && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.contact}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="checkIn"
              className="text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Check-In Date
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className={`border rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base ${
                errors.checkIn ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.checkIn && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.checkIn}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="checkOut"
              className="text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Check-Out Date
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className={`border rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base ${
                errors.checkOut ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.checkOut && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.checkOut}
              </p>
            )}
          </div>

          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="roomType"
              className="text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Room Type
            </label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              className={`border rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base ${
                errors.roomType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a room type</option>
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Suite</option>
              <option value="premium">Premium Oceanfront</option>
            </select>
            {errors.roomType && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.roomType}
              </p>
            )}
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>

        {/* Modal for Form Submission Confirmation */}
        {formSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className="bg-white rounded-lg p-4 sm:p-6 max-w-xs sm:max-w-md w-full text-center border-2 border-gray-300 shadow-lg"
              data-aos="fade-up"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                Thank you for your booking! We'll contact you shortly.
              </p>
              <button
                onClick={closeModal}
                className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;