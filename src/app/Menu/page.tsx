import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Footer from "../Footer";
import Testimonial from "@/component/Testimonial";
import ContactUsCard from "@/component/contact";

export default function page() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-3xl pl-5 font-extrabold text-yellow-500">Misti Ghar</h1>
        <div className="flex items-center gap-8">
          <IoCartOutline className="text-2xl cursor-pointer text-gray-700 hover:text-pink-700" />
          <FaUserCircle className="text-2xl cursor-pointer text-gray-700 hover:text-pink-700 mr-10" />
        </div>
      </header>
      <div className="p-6 ">
        <h2 className="text-4xl font-bold text-center flex items-center justify-center mb-10 text-pink-700">Our Special Sweets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Rasgolla */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/Rasgulla.jpg"
                alt="Rasgolla"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Rasgolla</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹5.00</p>

            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>


          {/* Nolen Gurer Rasgolla */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/nolengur.jpeg"
                alt="Nolen Gurer Rasgolla"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Nolen Gurer Rasgolla</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹5.00</p>

            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Sandesh */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/sandesh.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Sandesh</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Mishti Doi */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img src="/images/mist-doi.jpg" alt="Mishti Doi" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Mishti Doi</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹10.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Cham Cham */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img src="/images/cham-cham.jpeg" alt="Cham Cham" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Cham Cham</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹7.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Kachagolla */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img src="/images/kachagolla.jpg" alt="Kachagolla" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Kachagolla</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹7.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Kalakand */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img src="/images/kalakand.jpg" alt="Kalakand" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Kalakand</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹7.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Lencha */}
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img src="/images/lencha.jpg" alt="Lencha" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Lencha</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹10.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img src="/images/jolbhora.jpg" alt="jolbhora" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Jol Bhora</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹5.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/gulabjamun.jpeg"
                alt="Sandesh"
                className="w-96 h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Golab jamun</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/sarpuria.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Sarpuria</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/shitabhog.jpg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Shitabhog</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/kajukatli.png"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Kaju-Katli</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/imriti.png"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Imriti</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/jilabis.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Jilabi</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/rasmalai.png"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Rasmalai</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/rabri.png"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Rabri</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/chhenakheeri.png"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Chhena kheeri</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/laddu.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Laddu</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/kheer.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Kheer</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/sonpapri.png"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Sonpapdi</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/rajbhog.jpg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Keshar Rajbhog</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/labanga latika.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Labanga-Latika</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/malai-chomchom.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Malai-Chamcham</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/Kalojam.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Kalo Jam</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/chanar-jilapi.jpeg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Chanar Jilapi</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/mohonbhog.jpg"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Mohon Bhog</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src="/images/malpo.JPG"
                alt="Sandesh"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">Malpua</h3>
            <p className="text-md text-gray-700 mt-2 font-medium">₹4.00</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
      <div>
        <Testimonial />
      </div>
      <div className="mt-12">
        <ContactUsCard />
      </div>

      <Footer />
    </div>
  );
}
