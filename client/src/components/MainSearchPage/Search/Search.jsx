import React, { useEffect, useState } from "react";

// data retrieval
import fetchTrackData from "../../../utils/dataRetrieval/fetchTrackData";

export default function Search({ setId, setType, type }) {
  // set form state variables, change, submit
  const [trackForm, setTrackForm] = useState({
    trackSearch: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTrackForm({
      ...trackForm,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    // get form info
    e.preventDefault();
    console.log(trackForm);
    setTrackForm({ trackSearch: "" });

    // filtered track data already
    // refer to function to view all data retrieved
    const trackData = await fetchTrackData(trackForm.trackSearch);
    console.log(trackData);

    // set the widget
    setType(type);
    setId(trackData.trackId);

    // display the widget
    const widgetContainerEl = document.querySelector(".spotify-widget");
    widgetContainerEl.style.display = "block";
  };

  return (
    <form
      name="new-post"
      id="track-post"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        className="search-bar"
        type="text"
        id="trackSearch"
        name="trackSearch"
        value={trackForm.trackSearch}
        onChange={handleChange}
      />
      <button type="submit" id="submit" className="submit">
        Search Track
      </button>
    </form>
  );
}
