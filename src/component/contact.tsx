// components/ContactUsCard.js
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUsCard() {
    return (
        <div className='contact-wrapper mt-5'>
            <div className="contact-card">
                <div className="">
                    <div className="grid gap-10 items-center">

                        {/* Contact Info */}
                        <div className='text-center'>
                            <h2 className="text-3xl font-extrabold text-pink-600 mt-4 mb-5">Get in Touch</h2>
                            <p className="text-gray-600 text-sm mt-4">
                                We’d love to hear from you. Drop us a message and we’ll get back to you as soon as possible.
                            </p>
                            {/* <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-pink-500 text-lg" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-pink-500 text-lg" />
                <span>hello@sweetresto.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-pink-500 text-lg" />
                <span>123 Sweet Street, Dessert City</span>
              </li>
            </ul> */}
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form className="space-y-6 mt-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full mt-4 text-gray-600 border border-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 "
                                />
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full text-gray-600 mt-4 pl-10 border border-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                </div>

                                <textarea
                                    placeholder="Your Message"
                                    className="w-full text-gray-600 mt-4 border border-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                                ></textarea>

                                {/* Styled Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full mt-4 uppercase bg-pink-600 transition duration-300 text-black rounded-xl px-2 py-2 font-semibold shadow-xl"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div >
                </div >
            </div >
        </div >
    );
}
