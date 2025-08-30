import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/GptSlice";
import { languages } from "../utils/constants";
import { setLanguage } from "../utils/languageSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguage = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="absolute w-48 top-0 left-10 bg-gradient-to-b from-black"
      />

      {user && (
        <div className="absolute right-0 top-0 p-5 flex items-center">
          <button
            className="p-2 m-2 text-white-300 bg-gray-300 font-bold opacity-200 rounded-lg"
            onClick={handleGptSearch}
          >
           {showGptSearch?"Home Page":"GPT Search"}
          </button>
          {showGptSearch && (
            <select className="p-2 m-2 text-white-300 bg-gray-300 font-bold opacity-200 rounded-lg" onChange={handleLanguage}>
              {languages?.map(lang => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>)}
            <button
            className="ml-4 p-2 text-white-300 bg-gray-300 font-bold opacity-200 rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <img className="ml-4 w-10 h-10 rounded-lg"
            alt="usericon"
            src="https://occ-0-1001-2433.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          />
          
          
            
        </div>
      )}
    </div>
  );
};

export default Header;
