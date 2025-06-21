"use client";
import About from "@/component/about";
import Festiv from "@/component/festive";
import Footer from "./Footer";
import ContactUsCard from "@/component/contact";
import MenuPreview from "@/component/Menupreview";
import MarriageSweets from "@/component/Marriagesweet";
import Header from "./Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="background-container">
        <Header />
        <div className="flex items-center justify-center p-6 ml-12">
          <div className="w-4/5 mt-24 text-left ml-5">
            <h1 className="font-extrabold font-mono text-5xl text-pink-600 drop-shadow-md italic">
              Welcome to <span className="text-yellow-500 font-serif italic shadow-md shadow-yellow-600">MISTI-GHAR</span>
            </h1>
            <p className="mt-4 ml-4 text-lg text-gray-700 drop-shadow-lg italic">
              Experience the finest sweets with a touch of tradition and love. Order now.
            </p>
            <Link href="/Menu">
            <button className="mt-6 mx-auto block px-5 py-2 bg-pink-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-pink-800 hover:bg-red-400 transition">
              View Menu
            </button></Link>
          </div>


          <div className="w-1/2 flex justify-center">
            <img
              src="images/misti.jpg"
              alt="MISTI-GHAR"
              className=" h-auto rounded-full shadow-lg hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      {/* <div className="flex justify-center items-center">
      <Festiv/>
      </div> */}
      <div>
        <MenuPreview />
      </div>
      <div>
        <MarriageSweets />
      </div>
      <div className="mt-16
      ">
        <ContactUsCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}
