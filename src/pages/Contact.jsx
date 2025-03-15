import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import sunset from "../assets/images/sunset.webp";
import pool from "../assets/images/pool.webp";
import poolsunset from "../assets/images/poolsunset.webp";
import restaurant from "../assets/images/restaurant.webp";
import beachView from "../assets/images/beachView.webp";
import buildingFront from "../assets/images/buildingFront.webp";
import waterActv from "../assets/images/waterActv.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Contact() {
  const images = [waterActv, beachView, restaurant, pool];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
            Amenities & Activities
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-center"
            data-aos="fade-up"
          >
            Discover a variety of exciting activities and relaxing amenities
            designed to elevate your stay.
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

      {/* Contact Form Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 bg-white font-poppins">
        <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
            data-aos="fade-up"
          >
            Contact Us for Your Stay
          </h2>
          <p
            className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have questions about your reservation, amenities, or local
            attractions? We’re here to assist you! Feel free to send us a
            message, and we’ll get back to you promptly.
          </p>
          <div className="bg-gray-200 p-4 sm:p-6 md:p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div data-aos="fade-up" data-aos-delay="200">
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Subject"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" data-aos-delay="500">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4 sm:rows-5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <div
                className="flex justify-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-xl transition shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 bg-gray-100 font-poppins">
        <div className="max-w-md sm:max-w-lg md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
            data-aos="fade-up"
          >
            Our Location
          </h2>
          <p
            className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Find us at Recidencia del Hamor Beachfront in San Sebastian, Sta.
            Magdalena, Sorsogon, Philippines.
          </p>
          <div
            className="w-full h-64 sm:h-80 md:h-[450px] rounded-xl overflow-hidden shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2300924511745!2d124.0949478!3d12.6282757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c96c1198dc6f%3A0x995aaec9dae2c17a!2sRecidencia%20del%20Hamor%20Beachfront!5e0!3m2!1sen!2sus!4v169876543210!5m2!1sen!2sus"
            ></iframe>
          </div>
          <div
            className="text-center mt-3 sm:mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://www.google.com/maps/place/Recidencia+del+Hamor+Beachfront/@12.6390055,124.1122761,14z/data=!4m9!3m8!1s0x33a0c96c1198dc6f:0x995aaec9dae2c17a!5m2!4m1!1i2!8m2!3d12.6282757!4d124.0949478!16s%2Fg%2F11r4bqxc7h?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm sm:text-base"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Form Submission Confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-lg p-4 sm:p-6 max-w-xs sm:max-w-md w-full text-center border-2 border-gray-300 shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              Thank you for reaching out! We'll get back to you soon.
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
  );
}

export default Contact;