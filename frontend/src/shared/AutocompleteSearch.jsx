import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchFilters } from "../redux/slices/searchSlice";

const AutocompleteSearch = () => {
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  const dispatch = useDispatch();
  const autocompleteServiceRef = useRef(null);

  useEffect(() => {
    if (window.google && !autocompleteServiceRef.current) {
      autocompleteServiceRef.current =
        new window.google.maps.places.AutocompleteService();
    }
  }, []);

  const handleInput = (e) => {
    const input = e.target.value;
    setQuery(input);
    setFadeOut(false);
    setIsSelecting(false);
    if (input === "") {
      dispatch(setSearchFilters({ location: "" }));
    }
    if (!isSelecting && input.length > 2 && autocompleteServiceRef.current) {
      autocompleteServiceRef.current.getPlacePredictions(
        {
          input,
          types: ["(cities)"],
          componentRestrictions: { country: "in" },
        },
        (predictions, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            console.log("Predictions:", predictions);
            setSuggestions(predictions);
          } else {
            console.log("No predictions found");
            setSuggestions([]);
          }
        },
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (description) => {
    setIsSelecting(true);
    setQuery(description);
    dispatch(setSearchFilters({ location: description }));
    setFadeOut(true);
  };

  const handleAnimationEnd = () => {
    if (fadeOut) {
      setSuggestions([]);
      setFadeOut(false);
      setIsSelecting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (
        activeSuggestionIndex >= 0 &&
        activeSuggestionIndex < suggestions.length
      ) {
        handleSelect(suggestions[activeSuggestionIndex].description);
      } else {
        setSuggestions([]);
      }
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        ref={inputRef}
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Search by city"
        className="border p-2 rounded-full w-full md:w-62.5 px-5 lg:w-125 focus:outline-orange-500"
      />
      {suggestions.length > 0 && (
        <ul
          onAnimationEnd={handleAnimationEnd}
          className={`absolute bg-white border rounded-md shadow-lg mt-2 w-full max-h-60 overflow-y-auto z-50 transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`}
          style={{ zIndex: 9999 }}
        >
          {suggestions.map((suggestion, ind) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion.description)}
              className={` p-2 cursor-pointer hover:bg-gray-200 ${ind === activeSuggestionIndex ? "bg-gray-300" : ""}`}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearch;
