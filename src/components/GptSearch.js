import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
const GptSearch = () => {
  return (
    <div className="overflow-y-auto scrollbar-hide">
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/72bbcc46-904f-45ec-86cc-82f7e250734b/web/IN-en-20250728-TRIFECTA-perspective_789cb57d-abed-479d-b2db-bab4a94cab9c_large.jpg"
          alt="netflix-background"
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
