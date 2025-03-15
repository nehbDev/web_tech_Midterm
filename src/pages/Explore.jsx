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

function Explore() {
  const images = [waterActv, beachView, restaurant, pool];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden">
        {/* Sliding Images Container */}
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

        {/* Content Overlay */}
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

        {/* Navigation Buttons */}
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

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Section 1: Water Activity (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Dive into Adventure with Water Activities
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Experience the thrill of water sports at Residencia del Hamor.
              From kayaking to paddleboarding, our range of activities ensures
              an exciting day on the water for adventurers of all levels. Dive
              into the crystal-clear waves for a snorkeling adventure, or test
              your balance with a thrilling jet ski ride. Our expert instructors
              are on hand to guide beginners and challenge seasoned enthusiasts
              alike, making every moment on the water unforgettable.
            </p>
          </div>
          <div
            className="flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              src={waterActv}
              alt="Water activities at the resort"
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Section 2: Beach View (Image Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
          >
            <img
              src={beachView}
              alt="Beachfront view with hammock"
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Soak in Stunning Beach Views
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Relax on pristine sands with breathtaking ocean vistas. Our
              beachfront offers the perfect spot to unwind, with hammocks
              swaying gently in the sea breeze. Soak up the sun while sipping a
              refreshing coconut drink, or take a leisurely stroll along the
              shore as the waves crash in rhythm. At night, gather around a
              bonfire under the stars for a magical end to your day.
            </p>
          </div>
        </div>

        {/* Section 3: Restaurant (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Savor Culinary Delights at Our Restaurant
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Indulge in gourmet dishes crafted with fresh, local ingredients.
              Our restaurant offers a fine dining experience with panoramic
              views, perfect for romantic dinners or family gatherings. Savor
              the flavors of the region with our chef’s signature seafood
              platter, paired with a glass of crisp, locally sourced wine. Each
              meal is a celebration of culinary artistry, served with warm
              hospitality in an ambiance that feels both elegant and inviting.
            </p>
          </div>
          <div
            className="flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              src={restaurant}
              alt="Resort restaurant dining"
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Section 4: Pool (Image Left, Text Right) */}
        <div className="flex flex-col items-center text-center">
          <div className="max-w-xl sm:max-w-2xl mb-6 sm:mb-8" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Unwind by Our Luxurious Pool
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Take a dip in our infinity pool, surrounded by lush tropical
              gardens. It’s the perfect place to relax with a cocktail in hand
              while enjoying the sunset. Let the warm water melt away your cares
              as you listen to the gentle rustle of palm leaves overhead. Our
              poolside service ensures every need is met, from chilled towels to
              tropical smoothies, for a truly indulgent escape.
            </p>
          </div>
          <div className="w-full" data-aos="fade-up">
            <img
              src={pool}
              alt="Resort swimming pool"
              className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;