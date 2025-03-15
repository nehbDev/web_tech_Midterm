import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import room2 from "../assets/images/room2.webp";
import room6 from "../assets/images/room6.webp";
import premium1 from "../assets/images/premium1.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RoomDetailsDialog from "../components/RoomDetailsDialog";

function Rooms() {
  const images = [room2, room6, premium1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomsData = [
    {
      id: 1,
      name: "Regular Room",
      price: "₱1249.00",
      badge: "Best Offer",
      badgeColor: "bg-yellow-400 text-yellow-900",
      description:
        "Our comfortable Regular Room offers a cozy retreat with essential amenities for a pleasant stay. Perfect for solo travelers or couples seeking a peaceful environment to relax after a day of activities.",
      image: room2,
      amenities: [
        "Single Bed",
        "Fan",
        "Free WiFi",
        "Private Bathroom",
        "TV",
        "Desk",
      ],
      size: "20 m²",
      maxGuests: "2 people",
      minStay: "1 night",
      roomsUsed: "2",
      roomsAvailable: "5",
    },
    {
      id: 2,
      name: "Elegant Haven",
      price: "₱1949.00",
      badge: "Premium",
      badgeColor: "bg-red-300 text-red-700",
      description:
        "Experience luxury in our Elegant Haven room featuring a plush king-size bed and modern amenities. Enjoy breathtaking views from your private balcony and unwind in style with premium furnishings.",
      image: room6,
      amenities: [
        "King Size Bed",
        "Air Conditioning",
        "Free WiFi",
        "Private Bathroom",
        "Balcony",
        "Mini Fridge",
        "Coffee Machine",
        "Safe",
      ],
      size: "20 m²",
      maxGuests: "2 people",
      minStay: "1 night",
      roomsUsed: "0",
      roomsAvailable: "3",
    },
    {
      id: 3,
      name: "Grand Suite",
      price: "₱2199.00",
      badge: "Family",
      badgeColor: "bg-green-300 text-green-700",
      description:
        "Our spacious Grand Suite is ideal for families, featuring two comfortable single beds and ample space. Modern amenities and a warm atmosphere make this the perfect choice for a memorable family getaway.",
      image: premium1,
      amenities: [
        "2 Single Beds",
        "Air Conditioning",
        "Free WiFi",
        "Private Bathroom",
        "TV",
        "Desk",
        "Sofa",
        "Dining Area",
      ],
      size: "30 m²",
      maxGuests: "4 people",
      minStay: "2 nights",
      roomsUsed: "3",
      roomsAvailable: "2",
    },
  ];

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

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    setDialogOpen(true);
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
            Experience Stays in Style
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-center"
            data-aos="fade-up"
          >
            Comfort and elegance in nature.
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

      <div className="relative z-10 bg-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8"
            data-aos="fade-up"
          >
            Luxury Room Deals & Exclusive Packages
          </h2>

          {/* Room Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {roomsData.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-md"
                data-aos="fade-up"
              >
                {/* Room Image Section */}
                <div className="overflow-hidden rounded-t-lg relative w-full h-48 sm:h-56 md:h-56">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
                  />
                  {/* Price Tag */}
                  <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-semibold rounded-lg shadow-lg">
                    {room.price}
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-4 sm:p-6 space-y-3">
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      {room.name}
                    </h3>
                    <span
                      className={`${room.badgeColor} text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full shadow-sm`}
                    >
                      {room.badge}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="bg-gray-100 p-3 sm:p-4 rounded-lg h-[180px] flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                      {room.amenities.slice(0, 4).map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Room Size & Occupancy */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-600 text-xs sm:text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-800">Room Size:</span>
                        <span className="font-semibold text-gray-700">
                          {room.size}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 sm:mt-0">
                        <span className="text-gray-800">Max Guests:</span>
                        <span className="font-semibold text-gray-700">
                          {room.maxGuests}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    className="w-full mt-4 text-blue-700 font-semibold py-2 px-4 text-sm sm:text-base rounded-xl underline transition-colors duration-300 hover:text-gray-600"
                    onClick={() => handleViewDetails(room)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Details Dialog */}
      <RoomDetailsDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        room={selectedRoom}
      />
    </div>
  );
}

export default Rooms;