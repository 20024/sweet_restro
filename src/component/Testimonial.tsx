"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Riya Sharma",
        review:
            "The sweets were incredibly fresh and full of authentic flavor. Misti Ghar is now my go-to place for every celebration!",
        rating: 5,
        location: "Kolkata, India",
    },
    {
        name: "Amit Verma",
        review:
            "Great packaging and timely delivery! The Mishti Doi was exactly like how my grandma used to make it.",
        rating: 4,
        location: "Delhi, India",
    },
    {
        name: "Sneha Roy",
        review:
            "Their Sandesh is just heavenly. You can taste the quality in every bite!",
        rating: 5,
        location: "Mumbai, India",
    },
];

const Testimonial: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="testimonial-section">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-pink-600 mb-8 uppercase mt-6">
                    What Our Customers Say
                </h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 mx-2 mt-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 testimonial-card"
                        >
                            <p className="text-gray-700 mb-4">&ldquo;{testimonial.review}&rdquo;</p>
                            <div className="flex justify-center mb-2 text-yellow-500">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
