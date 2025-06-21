import React, { useState } from "react";
import { Sweet } from "@/app/data/Sweet";

interface BookProps {
  isOpen: boolean;
  onClose: () => void;
}

const Book: React.FC<BookProps> = ({ isOpen, onClose }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSweet = (sweetName: string) => {
    setSelectedItems((prev) =>
      prev.includes(sweetName)
        ? prev.filter((item) => item !== sweetName)
        : [...prev, sweetName]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="marriage-modal">
        <div className="card">
          <button
            onClick={onClose}
            className="closemodal"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Book For Events</h2>
          <p className="text-gray-600 mb-6 text-center">
            Please provide your details to book a slot for your event.
          </p>

          <form className="booking-form book-gap">
            <input
              type="text"
              placeholder="Your Name"
              className="custom-input"
            />

            <input
              type="text"
              placeholder="Location"
              className="custom-input"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="custom-input"
            />

            <input type="date" className="custom-input" placeholder="Event Date" />

            <select className="custom-input" defaultValue="">
              <option value="" disabled hidden>Select Order Purpose</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="festive">Festive Celebration</option>
              <option value="corporate">Corporate Event</option>
              <option value="other">Other</option>
            </select>

            <input type="number" className="custom-input" placeholder="Estimated Quantity (e.g. 100 pieces)" />
            <div
              className="custom-input cursor-pointer bg-white border border-gray-300 p-3 rounded-md text-left relative"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {selectedItems.length === 0 ? "Select Sweets" : selectedItems.join(', ')}
            </div>

            {showDropdown && (
              <div className="z-10 bg-white border border-gray-300 rounded-md shadow-md mt-2 w-full max-h-60 overflow-y-auto">
                {Sweet.map((sweet) => (
                  <label key={sweet.name} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={sweet.name}
                      checked={selectedItems.includes(sweet.name)}
                      onChange={() => toggleSweet(sweet.name)}
                      className="accent-pink-500" // Adds a pink color for checkbox
                    />
                    <span>{sweet.name}</span>
                  </label>
                ))}
              </div>
            )}
            <textarea className="custom-input" placeholder="Instructions (e.g. no nuts, sugar-free)"></textarea>

            <div className="radio-group">
              <label>
                <input type="radio" name="delivery" value="delivery" />
                Delivery
              </label>
              <label>
                <input type="radio" name="delivery" value="pickup" />
                Picked by Customer
              </label>
            </div>

            <button type="submit" className="custom-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
