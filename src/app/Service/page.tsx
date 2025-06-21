"use client";

import { useEffect, useState } from "react";

interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

const Service = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/services"); // Backend API call
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Sweet Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="mt-2 font-bold text-pink-600">₹{service.price}</p>
            {service.image && (
              <img src={service.image} alt={service.name} className="mt-4 w-full h-48 object-cover rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
