import Header from "./Header";
import { useState, useRef } from "react";
import checkvalidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();
  const handleSignIn = () => {
    signIn ? setSignIn(false) : setSignIn(true);
  };
  // const navigate=useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleFormValidation = () => {
    const errorMessage = checkvalidData(
      email.current.value,
      password.current.value,
       signIn ? "" : name.current.value,
       signIn
    );
    setErrorMessage(errorMessage);

    if (errorMessage) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          
          // navigate("/browse")
        })
        
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
        
    }
  };
  return (
    <div>
      <div className="relative z-10">
        <Header />
      </div>

      <div className="absolute">
        <img
          className="z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/72bbcc46-904f-45ec-86cc-82f7e250734b/web/IN-en-20250728-TRIFECTA-perspective_789cb57d-abed-479d-b2db-bab4a94cab9c_large.jpg"
          alt="netflix-background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="py-4 p-2 m-1 font-bold text-3xl text-white">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-4 p-2 m-1 w-full border border-gray-300 bg-gray-800 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="py-4 p-2 m-1 w-full border border-gray-300 bg-gray-800 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-4 p-2 m-1 w-full border border-gray-300 bg-gray-800 text-white"
        />
        <p className="text-red-500 font-bold m-1">{errorMessage}</p>
        <button
          className="w-full m-1 p-4 bg-red-600"
          onClick={() => {
            handleFormValidation();
          }}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 m-1 text-white font-bold hover:cursor-pointer"
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
