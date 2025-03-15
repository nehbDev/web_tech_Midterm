import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "../assets/images/main.webp";
import pool from "../assets/images/pool.webp";
import sunset from "../assets/images/sunset.webp";
import poolsunset from "../assets/images/poolsunset.webp";
import restaurant from "../assets/images/restaurant.webp";
import room2 from "../assets/images/room2.webp";
import room6 from "../assets/images/room6.webp";
import premium1 from "../assets/images/premium1.webp";
import beachView from "../assets/images/beachView.webp";
import nightPool from "../assets/images/nightPool.webp";
import buildingFront from "../assets/images/buildingFront.webp";
import waterActv from "../assets/images/waterActv.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Home() {
  const images = [main, pool, nightPool]; // Add more images if needed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false, // Ensures animation happens only once
      easing: "ease-in-out",
    });

    AOS.refresh();

    // Scroll event listener
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Auto-slide every 5 seconds
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

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Sliding Images Container */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full min-h-screen bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-poppins px-4 sm:px-8">
          <h1
            className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 text-center"
            data-aos="fade-down"
          >
            Recidencia Del Hamor
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 md:mb-6 text-center"
            data-aos="fade-up"
          >
            Where Tranquility Meets Luxury in the Heart of Nature.
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full shadow-md transition"
        >
          <ChevronLeft size={24} sm:size={32} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full shadow-md transition"
        >
          <ChevronRight size={24} sm:size={32} />
        </button>
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Experience luxury in the heart of nature.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-8">
              At Residencia del Hamor, we redefine relaxation with a perfect
              blend of comfort and natural beauty. Surrounded by lush
              landscapes, our resort offers a serene escape where you can
              unwind, explore, and create unforgettable memories. Whether you're
              seeking adventure or tranquility, we provide a stay that feels
              like home—only better.
            </p>
          </div>

          {/* Images Grid */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[10px]">
            <img
              src={poolsunset}
              alt="Resort with palm trees"
              className="w-full h-40 sm:h-60 object-cover rounded-lg"
              data-aos="fade-left"
            />
            <img
              src={sunset}
              alt="Resort swimming pool"
              className="w-full h-40 sm:h-60 object-cover rounded-lg"
              data-aos="fade-left"
            />
          </div>
        </div>
        <img
          src={buildingFront}
          alt="Beachfront with hammock"
          className="w-full h-40 sm:h-60 md:h-80 object-cover rounded-lg mt-6 sm:mt-8"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
        />
      </div>

      {/* Amenities Section */}
      <div className="relative z-10 bg-gray-100 py-6 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 sm:mb-8"
            data-aos="fade-up"
          >
            Exciting Activities & Relaxing Retreats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Amenity 1 */}
            <div
              className="bg-white rounded-lg shadow-md text-center"
              data-aos="flip-left"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={waterActv}
                  alt="Luxurious Rooms"
                  className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-lg sm:text-xl font-bold">Exciting Water Activities</h3>
                <p className="text-sm text-gray-600">
                  Dive into thrilling adventures like jet skiing, snorkeling,
                  and paddleboarding.
                </p>
              </div>
            </div>

            {/* Amenity 2 */}
            <div
              className="bg-white rounded-lg shadow-md text-center"
              data-aos="flip-left"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={beachView}
                  alt="Serene Ocean View"
                  className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-lg sm:text-xl font-bold">Serene Ocean View</h3>
                <p className="text-sm text-gray-600">
                  Unwind with breathtaking ocean views while enjoying the sea
                  breeze.
                </p>
              </div>
            </div>

            {/* Amenity 3 */}
            <div
              className="bg-white rounded-lg shadow-md text-center"
              data-aos="flip-left"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={restaurant}
                  alt="Fine Dining"
                  className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-lg sm:text-xl font-bold">Fine Dining</h3>
                <p className="text-sm text-gray-600">
                  Savor gourmet meals prepared with fresh, locally sourced
                  ingredients.
                </p>
              </div>
            </div>
          </div>

          {/* Centered Explore Button */}
          <div className="flex justify-center mt-4 sm:mt-8">
            <Link to="/Explore">
              <button
                className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                data-aos="fade-up"
                data-aos-once="true"
              >
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white py-6 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 sm:mb-8"
            data-aos="fade-up"
          >
            Exclusive Room Deals & Packages
          </h2>

          {/* Room Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Room 1 */}
            <div
              className="bg-white rounded-lg shadow-md"
              data-aos="flip-right"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={room2}
                  alt="Luxurious Room"
                  className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-2 sm:p-4">
                <span className="bg-yellow-300 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  Best Offer
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                  Regular
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  A warm and inviting space with all the essentials for a
                  comfortable stay.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">₱1249.00</p>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div
              className="bg-white rounded-lg shadow-md"
              data-aos="flip-right"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={room6}
                  alt="Luxurious Room"
                  className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-2 sm:p-4">
                <span className="bg-red-300 text-red-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  Premium
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                  Elegant Haven
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Experience modern luxury with spacious interiors and a scenic
                  view.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">₱1949.00</p>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div
              className="bg-white rounded-lg shadow-md"
              data-aos="flip-right"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={premium1}
                  alt="Luxurious Room"
                  className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-2 sm:p-4">
                <span className="bg-green-300 text-green-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  Family
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                  Grand Suite
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Perfect for families, offering generous space and premium
                  comfort.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">₱2199.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Explore Button */}
          <div className="flex justify-center mt-4 sm:mt-8">
            <Link to="/Rooms">
              <button
                className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                data-aos="fade-up"
                data-aos-once="true"
              >
                See All Offers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;