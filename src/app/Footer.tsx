"use client";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
        <Link href="#">
          <h3 className="text-2xl font-bold text-yellow-500 mb-2 uppercase">misti ghar</h3>
          </Link>
          <p className="text-sm">Bringing you the sweetest moments with handcrafted treats and love.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-pink-600">Home</Link></li>
            <li><Link href="about" className="hover:text-pink-600">About Us</Link></li>
            <li><Link href="/Menu" className="hover:text-pink-600">Menu</Link></li>
            <li><Link href="contact" className="hover:text-pink-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2"><FaPhone /> +1 234 567 890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> hello@sweetresto.com</li>
            <li>123 Sweet Street, Dessert City, CA</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-pink-700 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 border-t border-pink-200 py-4">
        © {new Date().getFullYear()} MISTI GHAR. All rights reserved.
      </div>
    </footer>
  );
}
