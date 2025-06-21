"use client";
import React from "react";
import { Sweet } from "@/app/data/Sweet";
import Link from "next/link";


const MenuPreview = () => {
    return (
        <div className="min-h-screen bg-pink-50 p-9 menu-wrappar">
            <h2 className="text-3xl font-bold text-center mb-10 text-pink-700">Menu Preview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8">
                {Sweet.slice(0, 4).map(({ name, price, img }) => (<div key={name} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
                    <div className="w-full h-52 overflow-hidden rounded-lg">
                        <img
                            src={img}
                            alt={name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <h3 className="text-lg font-semibold mt-2 text-gray-900">{name}</h3>
                    <p className="text-md text-gray-700 mt-1 font-medium">{price}</p>
                    <button className="mt-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                        Add to Cart
                    </button>
                </div>
                ))}
            </div>
            <Link href="/Menu">
            <button className="mt-6 mb-3 mx-auto block px-5 py-2 bg-pink-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-pink-500 hover:bg-red-400 transition">
            View All Menu
          </button>
          </Link>
        </div>
    );
};

export default MenuPreview;
