"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Book from "@/component/Popup/Book"; // Ensure this path is correct

const MarriageSweets = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Function to open and close the modal
  const toggleBookingModal = () => setIsBookingOpen((prev) => !prev);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sweets = [
    {
      title: "Custom Wedding Sweets",
      description: "Specially crafted sweets for your big day.",
      img: "images/biyeoffer.jpg",
    },
    {
      title: "Premium Wedding Packages",
      description: "Delicious sweets curated for wedding banquets.",
      img: "images/biyeoffer.jpg",
    },
    {
      title: "Traditional Sweets for Marriages",
      description: "Sweets that keep the traditional flavors alive.",
      img: "images/biyeoffer.jpg",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto text-center spacial-offer">
        <h2 className="text-3xl font-bold text-pink-700 mt-6">
          Sweets for Weddings & Special Occasions
        </h2>
        <p className="text-lg text-gray-700 mt-6 offer-text">
          Celebrate your special moments with our premium sweets, crafted with
          love and tradition. We offer a wide variety of sweets perfect for
          weddings, receptions, and other joyous occasions.
        </p>

        <Slider {...settings}>
          {sweets.map(({ title, description, img }, index) => (
            <div key={index} className="px-5 wrapper offer">
              <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition text-center special-sweet">
                <div className="flex justify-center">
                  <img
                    src={img}
                    alt={title}
                    className="w-[250px] h-[200px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-900">
                  {title}
                </h3>
                <p className="text-md text-gray-700 mt-2">{description}</p>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={toggleBookingModal}
          className="mt-6 mb-3 mx-auto block px-5 py-2 bg-pink-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-pink-500 hover:bg-red-400 transition"
        >
          Book Your Slot
        </button>

        {/* Pass the correct props to the Book component */}
        <Book isOpen={isBookingOpen} onClose={toggleBookingModal} />
      </div>
    </section>
  );
};

export default MarriageSweets;
