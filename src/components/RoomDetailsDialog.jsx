import { useState, useEffect } from "react";
import { X, Check, Users, Calendar, Square } from "lucide-react";
import { Link } from "react-router-dom";

function RoomDetailsDialog({ isOpen, onClose, room }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    const style = document.createElement("style");
    style.textContent = `
        .dialog-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .dialog-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50">
      {/* Dialog container */}
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-3xl max-h-[90vh] overflow-y-auto dialog-scrollbar-hide"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        {/* Close button */}
        <div className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10">
          <button
            onClick={onClose}
            className="bg-white/80 p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X size={20} className="sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* Room image */}
        <div className="relative w-full h-48 sm:h-64 md:h-80">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
          />
          {/* Price badge */}
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-semibold rounded-lg shadow-lg">
            {room.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              {room.name}
            </h2>
            <span
              className={`${room.badgeColor} text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full shadow-sm`}
            >
              {room.badge}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            {room.description}
          </p>

          {/* Room specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Users size={16} className="sm:w-5 sm:h-5 text-blue-600" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">Max Guests</p>
                <p className="font-semibold text-sm sm:text-base">
                  {room.maxGuests}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Square size={16} className="sm:w-5 sm:h-5 text-blue-600" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">Room Size</p>
                <p className="font-semibold text-sm sm:text-base">
                  {room.size}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Check size={16} className="sm:w-5 sm:h-5 text-blue-600" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">Room Used</p>
                <p className="font-semibold text-sm sm:text-base">
                  {room.roomsUsed}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Check size={16} className="sm:w-5 sm:h-5 text-blue-600" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">
                  Room Available
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  {room.roomsAvailable}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Calendar size={16} className="sm:w-5 sm:h-5 text-blue-600" />
              <div>
                <p className="text-xs sm:text-sm text-gray-700">Min. Stay</p>
                <p className="font-semibold text-sm sm:text-base">
                  {room.minStay}
                </p>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Room Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {room.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm sm:text-base"
                >
                  <Check size={14} className="sm:w-4 sm:h-4 text-green-500" />
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terms and conditions */}
          <div className="bg-gray-100 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
            <h4 className="font-semibold text-sm sm:text-base mb-2">
              Terms & Conditions
            </h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Check-in: 2:00 PM, Check-out: 12:00 PM</li>
              <li>• Free cancellation up to 24 hours before check-in</li>
              <li>• Additional guests may incur extra charges</li>
              <li>• Pets are not allowed</li>
            </ul>
          </div>

          {/* Booking button */}
          <div className="flex justify-center">
            <Link to="/Book">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-xl transition shadow-md">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Note: This global style is already applied in useEffect, so no need to repeat it here
export default RoomDetailsDialog;