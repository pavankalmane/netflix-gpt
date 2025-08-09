import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const handleSignIn = () => {
    signIn ? setSignIn(false) : setSignIn(true);
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/72bbcc46-904f-45ec-86cc-82f7e250734b/web/IN-en-20250728-TRIFECTA-perspective_789cb57d-abed-479d-b2db-bab4a94cab9c_large.jpg"
          alt="netflix-background"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="py-4 p-2 m-4 font-bold text-3xl text-white">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn &&
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 p-2 m-4 w-full border border-gray-300 bg-gray-800 text-white"
          />
        }
        <input
          type="text"
          placeholder="Email or mobile number"
          className="py-4 p-2 m-4 w-full border border-gray-300 bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Password"
          className="py-4 p-2 m-4 w-full border border-gray-300 bg-gray-800 text-white"
        />
        <button className="w-full m-4 p-4 bg-red-600">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 m-4 text-white font-bold hover:cursor-pointer"
          onClick={() => {
            handleSignIn();
          }}
        >
          {signIn
            ? "New to Netflix ? Sign up now."
            : "Already have an account ? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
