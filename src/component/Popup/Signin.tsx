import React from "react";

interface SignInProps {
  toggleModal: () => void;
  switchModal: () => void;
}


const SignIn: React.FC<SignInProps> = ({ toggleModal,switchModal }) => {
  return (
    <section>
      <div className="">
        <div className="bg-white rounded-xl p-6 w-full shadow-lg relative">
          <div className="card">
            <span
              onClick={toggleModal}
              className="closemodal cursor-pointer"
            >
              ✕
            </span>
          </div>
          <h2 className="text-2xl font-bold text-center text-pink-600 uppercase">Login</h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email" required
              className="w-full px-2 py-3 mt-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
            />
            <input
              type="password"
              placeholder="Password" required
              className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
            />
            <div className="login flex items-center justify-between mt-2">
              {/* <label className="">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label> */}
              <button
                type="button"
                className="text-sm text-pink-600 hover:underline font-medium"
              // onClick={() => console.log("Redirect to Forgot Password")}
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full text-2xl mt-4 bg-pink-600 text-white py-4 px-2 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={switchModal}
              className="text-pink-600 hover:underline font-semibold"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </section>

  );
};

export default SignIn;
